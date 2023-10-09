from django.urls import include, path
from rest_framework import routers

from .views import DisciplineViewSet, RegistrationViewSet

router = routers.DefaultRouter()
router.register(r'discipline', DisciplineViewSet)
router.register(
    r'registration',
    RegistrationViewSet,
    basename='registration'
)

urlpatterns = [
    path('', include(router.urls)),
]
