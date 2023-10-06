from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets

from .filters import RegistrationFilter
from .models import RegistrationToDiscipline
from .permissions import IsOwnerOrReadOnly
from .serializers import RegistrationToDisciplineSerializer


class RegistrationViewSet(viewsets.ModelViewSet):
    queryset = RegistrationToDiscipline.objects.all()
    serializer_class = RegistrationToDisciplineSerializer
    permission_classes = (IsOwnerOrReadOnly, )
    filter_backends = (DjangoFilterBackend,)
    filterset_class = RegistrationFilter

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def get_queryset(self):
        if self.request.user.is_authenticated:
            return RegistrationToDiscipline.objects.filter(
                user=self.request.user
            )
        else:
            return RegistrationToDiscipline.objects.none()
