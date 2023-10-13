from disciplines.models import Discipline
from django.contrib.auth.base_user import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.core.validators import validate_email
from django.db import models
from django.core.exceptions import ValidationError
from phonenumber_field.modelfields import PhoneNumberField

from .managers import UserManager
from .validators import validate_phone_number


class ScheduleInfo(models.Model):
    date = models.CharField(max_length=255, verbose_name='Дата')
    start_time = models.TimeField(verbose_name='Время начала')
    end_time = models.TimeField(verbose_name='Время конца')

    class Meta:
        verbose_name = 'Дата и время занятия'
        verbose_name_plural = 'Дата и время занятий'
        ordering = ['start_time']

    def __str__(self):
        return f'{self.date}: {self.start_time} - {self.end_time}'

    def clean(self):
        if self.start_time >= self.end_time:
            raise ValidationError(
                'Время начала должно быть меньше времени конца занятия')

    def save(self, *args, **kwargs):
        self.clean()
        super(ScheduleInfo, self).save(*args, **kwargs)


class Schedule(models.Model):
    user = models.ForeignKey(
        'User',
        on_delete=models.CASCADE,
        related_name='schedule_user',
        verbose_name='Расписание пользователя'
    )
    discipline = models.ForeignKey(
        Discipline,
        on_delete=models.CASCADE,
        verbose_name='Дисциплина'
    )
    schedule_info = models.ManyToManyField(
        ScheduleInfo,
        related_name='schedule_info',
        verbose_name='Дата и время занятий'
    )

    class Meta:
        verbose_name = 'Расписание'
        verbose_name_plural = 'Расписания'
        ordering = ['-pk']

    def __str__(self):
        return f'{self.user} - {self.discipline}'


class User(AbstractBaseUser, PermissionsMixin):
    USER_TYPES = (
        ('student', 'Ученик'),
        ('teacher', 'Преподаватель'),
        ('admin', 'Администратор'),
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
    discipline = models.ManyToManyField(
        Discipline,
        related_name='users',
        verbose_name='Дисциплина пользователя',
        blank=True,
    )
    schedule = models.ManyToManyField(
        Schedule,
        related_name='schedule',
        verbose_name='Расписание занятий',
        blank=True,
    )
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    date_joined = models.DateTimeField(auto_now_add=True)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['phone', 'first_name', 'last_name', 'date_of_birth',
                       'photo', 'user_type']

    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'
        ordering = ('email',)

    def __str__(self):
        return f'{self.last_name} {self.first_name} - {self.email}'
