from rest_framework import serializers

from .models import (Cost, CountLesson, Discipline, RegistrationToDiscipline,
                     Skill, TypeLesson)


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
            'name_sklonenie',
            'image_url',
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


class LessonDateSerializer(serializers.Serializer):
    date = serializers.DateField()
    time = serializers.CharField()


class RegistrationToDisciplineSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(
        default=serializers.CurrentUserDefault(),
        read_only=True
    )
    lesson_dates = LessonDateSerializer(many=True)

    class Meta:
        model = RegistrationToDiscipline
        fields = '__all__'

    def create(self, validated_data):
        lesson_dates_data = validated_data.pop('lesson_dates')
        instance = RegistrationToDiscipline.objects.create(**validated_data)
        lesson_dates = [
            {'date': item['date'].strftime('%Y-%m-%d'), 'time': item['time']}
            for item in lesson_dates_data]
        instance.lesson_dates = lesson_dates
        instance.save()
        return instance
