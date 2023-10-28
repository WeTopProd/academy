import base64

import requests
from django.contrib.auth import authenticate
from django.shortcuts import get_object_or_404
from datetime import datetime
from django.conf import settings
from django.core.mail import send_mail
from django.utils.decorators import method_decorator
from django.utils.translation import gettext_lazy as _
from django.views.decorators.csrf import csrf_exempt
from rest_framework import generics, status
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from .backends import PhoneBackend
from .models import Schedule, User
from .serializers import ScheduleSerializer, UserSerializer
from disciplines.models import Discipline

class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserScheduleList(generics.ListAPIView):
    serializer_class = ScheduleSerializer

    def get_queryset(self):
        user = self.request.user
        return Schedule.objects.filter(user=user)


@method_decorator(csrf_exempt, name='dispatch')
class TokenCreateByPhoneView(APIView):
    def post(self, request):
        phone = request.data.get('phone')
        password = request.data.get('password')

        if phone is None or password is None:
            return Response(
                {'message': _('Телефон и пароль являются '
                              'обязательными полями')},
                status=status.HTTP_400_BAD_REQUEST
            )

        user = authenticate(
            request,
            phone=phone,
            password=password,
            backend=PhoneBackend()
        )

        if not user:
            return Response({'message': _('Неверный телефон или пароль.')},
                            status=status.HTTP_401_UNAUTHORIZED)

        token, created = Token.objects.get_or_create(user=user)

        return Response({'auth_token': token.key})


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def send_email(request):
    user = request.user
    now = datetime.now()
    date = now.strftime("%d %B %Y, %A %H:%M")
    discipline = request.data.get('discipline', '')

    first_name = user.first_name
    last_name = user.last_name
    phone = user.phone
    email_user = user.email

    message = (f"ЗАПИСЬ НА ДИСЦИПЛИНУ ОТ {last_name} {first_name}\n\n"
               f"НОМЕР ТЕЛЕФОНА: {phone}\nПОЧТА: {email_user}\n\n"
               f"ЗАПИСЬ:\nДАТА ЗАПИСИ: {date}\nДИСЦИПЛИНА:{discipline}")

    send_mail(
        f"ЗАПИСЬ НА ДИСЦИПЛИНУ ОТ {last_name} {first_name}",
        message,
        settings.DEFAULT_FROM_EMAIL,
        [settings.DEFAULT_FROM_EMAIL],
        fail_silently=False,
    )
    return Response({'success': 'Сообщение успешно отправлено'})


@api_view(['POST'])
def send_application(request):
    now = datetime.now()
    date = now.strftime("%d %B %Y, %A %H:%M")
    first_name = request.data.get('first_name', '')
    phone = request.data.get('phone', '')

    message = (f"ЗАПИСЬ НА ОБРАТНУЮ СВЯЗЬ ОТ {first_name}\n\n"
               f"НОМЕР ТЕЛЕФОНА: {phone}\nДАТА: {date}")

    send_mail(
        f"ЗАПИСЬ НА ОБРАТНУЮ СВЯЗЬ ОТ {first_name}",
        message,
        settings.DEFAULT_FROM_EMAIL,
        [settings.DEFAULT_FROM_EMAIL],
        fail_silently=False,
    )
    return Response({'success': 'Сообщение успешно отправлено'})


@api_view(['POST'])
def send_first_lesson(request):
    now = datetime.now()
    date = now.strftime("%d %B %Y, %A %H:%M")
    first_name = request.data.get('first_name', '')
    discipline_id = request.data.get('discipline_id', '')
    discipline = get_object_or_404(Discipline, pk=int(discipline_id))
    phone = request.data.get('phone', '')

    message = (f"ЗАПИСЬ НА ПЕРВОЕ БЕСПЛАТНОЕ ЗАНЯТИЕ ОТ {first_name}\n\n"
               f"НОМЕР ТЕЛЕФОНА: {phone}\nДАТА: {date}\n"
               f"ДИСЦИПЛИНА:{discipline}")

    send_mail(
        f"ЗАПИСЬ НА ОБРАТНУЮ СВЯЗЬ ОТ {first_name}",
        message,
        settings.DEFAULT_FROM_EMAIL,
        [settings.DEFAULT_FROM_EMAIL],
        fail_silently=False,
    )
    return Response({'success': 'Сообщение успешно отправлено'})


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def payment(request):
    # Логин и пароль от личного кабинета PayKeeper
    user = "admin"
    password = "268cb05d892c"
    base64_auth = base64.b64encode(f"{user}:{password}".encode()).decode()
    headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': f'Basic {base64_auth}'
    }
    server_paykeeper = "https://reiting.server.paykeeper.ru"

    price = int(request.data.get('price', ''))
    num_order = request.data.get('num_order', '')
    user_data = request.user
    client_id = user_data.last_name + ' ' + user_data.first_name
    client_email = user_data.email
    service_name = request.data.get('service_name', '')
    client_phone = user_data.phone
    payment_data = {
        "pay_amount": price,
        "clientid": client_id,
        "orderid": num_order,
        "client_email": client_email,
        "service_name": service_name,
        "client_phone": f"{client_phone}"
    }

    # Готовим первый запрос на получение токена безопасности
    uri = "/info/settings/token/"
    token_response = requests.get(server_paykeeper + uri, headers=headers)
    token_data = token_response.json()

    # В ответе должно быть заполнено поле token, иначе - ошибка
    if 'token' not in token_data:
        raise Exception("Token not found.")
    token = token_data['token']

    # Готовим запрос 3.4 JSON API на получение счёта
    uri = "/change/invoice/preview/"

    # Формируем список POST параметров
    payment_data['token'] = token
    invoice_response = requests.post(server_paykeeper + uri, headers=headers,
                                     data=payment_data)
    invoice_data = invoice_response.json()

    # В ответе должно быть поле invoice_id, иначе - ошибка
    if 'invoice_id' not in invoice_data:
        raise Exception("Invoice ID not found.")
    invoice_id = invoice_data['invoice_id']

    # В этой переменной прямая ссылка на оплату с заданными параметрами
    link = f"{server_paykeeper}/bill/{invoice_id}/"

    return Response({'success': f'{link}'})
