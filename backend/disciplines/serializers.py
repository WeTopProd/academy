from rest_framework import serializers

from .models import (CountLesson, Discipline, RegistrationToDiscipline,
                     TypeLesson, Cost, Skill)


class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ('name', )


class CostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cost
        fields = (
            'name',
            'price',
            'type',
        )


class DisciplineSerializer(serializers.ModelSerializer):
    skills = serializers.SerializerMethodField()
    cost = CostSerializer(many=True)

    class Meta:
        model = Discipline
        fields = (
            'id',
            'name',
            'description',
            'lesson_duration',
            'skills',
            'cost',
            'recommended_lesson_count',
        )

    def get_skills(self, obj):
        if obj.skills.exists():
            return list(obj.skills.values_list('name', flat=True))
        return None


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
