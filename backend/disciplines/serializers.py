from rest_framework import serializers

from .models import (CountLesson, Discipline, RegistrationToDiscipline,
                     TypeLesson)


class DisciplineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Discipline
        fields = '__all__'


class TypeLessonSerializer(serializers.ModelSerializer):
    class Meta:
        model = TypeLesson
        fields = '__all__'


class CountLessonSerializer(serializers.ModelSerializer):
    class Meta:
        model = CountLesson
        fields = '__all__'


class RegistrationToDisciplineSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(
        default=serializers.CurrentUserDefault(),
        read_only=True
    )

    class Meta:
        model = RegistrationToDiscipline
        fields = '__all__'
