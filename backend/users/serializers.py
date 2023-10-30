from djoser.serializers import UserCreateSerializer, UserSerializer
from phonenumber_field.serializerfields import PhoneNumberField
from rest_framework import serializers

from .models import Schedule, ScheduleInfo
from disciplines.models import Discipline

class Teachers_openWindow_ScedueleSerializer(serializers.Serializer):
    date = serializers.DateField()
    start_time = serializers.CharField()
    end_time = serializers.CharField()


class Teachers_assigned_ScedueleSerializer(serializers.Serializer):
    date = serializers.DateField()
    class_start_time = serializers.CharField()
    class_end_time = serializers.CharField()


class RegistrationSerializer(serializers.Serializer):
    isDone = serializers.BooleanField()


class CertificatesSerializer(serializers.Serializer):
    discipline_id = serializers.IntegerField()
    hours = serializers.IntegerField()
    user_id = serializers.IntegerField()
    registration_id = serializers.IntegerField()


class UserCreateSerializer(UserCreateSerializer):
    phone = PhoneNumberField()
    date_of_birth = serializers.DateField(
        format='%d.%m.%Y', input_formats=['%d.%m.%Y']
    )
    photo = serializers.ImageField(max_length=None, use_url=True)

    def validate_phone(self, value):
        return value.replace('8', '+7', 1)

    class Meta(UserCreateSerializer.Meta):
        fields = (
            'email',
            'first_name',
            'last_name',
            'phone',
            'date_of_birth',
            'photo',
            'user_type',
            'discipline',
            'schedule',
            'password',
            're_password'
        )


class UserSerializer(UserSerializer):
    phone = PhoneNumberField()
    date_of_birth = serializers.DateField(
        format='%d.%m.%Y', input_formats=['%d.%m.%Y']
    )
    photo = serializers.ImageField(max_length=None, use_url=True)
    teachers_openWindow_Sceduele = Teachers_openWindow_ScedueleSerializer(
        many=True
    )
    teachers_assigned_Sceduele = Teachers_assigned_ScedueleSerializer(
        many=True
    )
    registration = RegistrationSerializer(many=True)
    certificates = CertificatesSerializer(many=True)

    class Meta(UserSerializer.Meta):
        ref_name = 'CustomUserSerializer'
        fields = (
            'id',
            'email',
            'first_name',
            'last_name',
            'date_of_birth',
            'photo',
            'user_type',
            'discipline',
            'schedule',
            'teachers_openWindow_Sceduele',
            'teachers_assigned_Sceduele',
            'certificates',
            'registration',
            'phone'
        )


class PhoneNumberSerializerField(PhoneNumberField):
    def to_representation(self, value):
        return super().to_representation(str(value))

    def to_internal_value(self, data):
        try:
            parsed_data = super().to_internal_value(data)
        except serializers.ValidationError as e:
            raise serializers.ValidationError({'phone': e.detail[0]})

        return parsed_data


class ScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Schedule
        fields = (
            'id',
            'teacher',
            'discipline',
            'schedule_info'
        )


class ScheduleInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ScheduleInfo
        fields = (
            'date',
            'start_time',
            'end_time'
        )
