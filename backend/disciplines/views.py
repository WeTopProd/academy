from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets

from .filters import RegistrationFilter
from .models import Discipline, RegistrationToDiscipline, Teacher, TeacherInfo
from .serializers import (DisciplineSerializer,
                          RegistrationToDisciplineSerializer,
                          TeacherInfoSerializer, TeacherSerializer)


class DisciplineViewSet(viewsets.ModelViewSet):
    queryset = Discipline.objects.all()
    serializer_class = DisciplineSerializer


class RegistrationViewSet(viewsets.ModelViewSet):
    queryset = RegistrationToDiscipline.objects.all()
    serializer_class = RegistrationToDisciplineSerializer
    filter_backends = (DjangoFilterBackend,)
    filterset_class = RegistrationFilter

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class TeacherViewSet(viewsets.ModelViewSet):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer


class TeacherInfoViewSet(viewsets.ModelViewSet):
    queryset = TeacherInfo.objects.all()
    serializer_class = TeacherInfoSerializer
