from django.contrib.auth.base_user import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.core.validators import validate_email
from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

from .managers import UserManager
from .validators import validate_phone_number


class User(AbstractBaseUser, PermissionsMixin):
    USER_TYPES = (
        ('student', 'Ученик'),
        ('teacher', 'Преподаватель'),
    )
    email = models.EmailField(
        db_index=True,
        max_length=255,
        unique=True,
        verbose_name='Почта',
        error_messages={
            'unique': 'Пользователь с таким почтовым ящиком уже существует.',
        },
        validators=[validate_email],
    )
    phone = PhoneNumberField(
        verbose_name='Телефон',
        unique=True,
        error_messages={
            'unique': 'Пользователь с таким номером телефона уже существует.',
        },
        validators=[validate_phone_number]
    )
    first_name = models.CharField(
        max_length=255,
        verbose_name='Имя'
    )
    last_name = models.CharField(
        max_length=255,
        verbose_name='Фамилия'
    )
    date_of_birth = models.DateField(
        null=True,
        blank=True,
        verbose_name='Дата рождения'
    )
    photo = models.ImageField(
        upload_to='backend_media/',
        verbose_name='Фото пользователя',
        blank=True,
        null=True
    )
    user_type = models.CharField(
        verbose_name='Тип пользователя',
        max_length=50,
        choices=USER_TYPES,
        blank=True,
        null=True,
    )
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    date_joined = models.DateTimeField(auto_now_add=True)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['phone', 'first_name', 'last_name', 'date_of_birth',
                       'user_type', 'photo']

    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'
        ordering = ('email',)

    def __str__(self):
        return self.email
