from djoser.serializers import UserCreateSerializer, UserSerializer
from phonenumber_field.serializerfields import PhoneNumberField
from rest_framework import serializers


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
            'password',
            're_password'
        )


class UserSerializer(UserSerializer):
    phone = PhoneNumberField()
    date_of_birth = serializers.DateField(
        format='%d.%m.%Y', input_formats=['%d.%m.%Y']
    )
    photo = serializers.ImageField(max_length=None, use_url=True)

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
