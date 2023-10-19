from django.urls import include, path
from rest_framework import routers

from .views import (DisciplineViewSet, RegistrationViewSet, TeacherInfoViewSet,
                    TeacherViewSet)

router = routers.DefaultRouter()
router.register(r'discipline', DisciplineViewSet)
router.register(
    r'registration',
    RegistrationViewSet,
    basename='registration'
)
router.register(r'teachers', TeacherViewSet)
router.register(r'teacher-infos', TeacherInfoViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
