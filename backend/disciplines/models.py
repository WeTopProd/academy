from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

from users.validators import validate_phone_number


class Discipline(models.Model):
    name = models.CharField(
        max_length=255,
        verbose_name='Название дисциплины'
    )

    class Meta:
        verbose_name = 'Дисциплина'
        verbose_name_plural = 'Дисциплины'
        ordering = ['name']

    def __str__(self):
        return self.name


class TypeLesson(models.Model):
    name = models.CharField(
        max_length=255,
        verbose_name='Название вида занятий'
    )

    class Meta:
        verbose_name = 'Вид занятий'
        verbose_name_plural = 'Виды занятий'
        ordering = ['name']

    def __str__(self):
        return self.name


class CountLesson(models.Model):
    name = models.CharField(
        max_length=255,
        verbose_name='Название количества занятий'
    )

    class Meta:
        verbose_name = 'Количество занятий'
        verbose_name_plural = 'Количества занятий'
        ordering = ['name']

    def __str__(self):
        return self.name


class AdditionalPerson(models.Model):
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
    phone = PhoneNumberField(
        verbose_name='Телефон',
        validators=[validate_phone_number]
    )
    discipline = models.ForeignKey(
        Discipline,
        on_delete=models.CASCADE,
        verbose_name='Дисциплина'
    )

    class Meta:
        verbose_name = 'Дополнительная персона'
        verbose_name_plural = 'Дополнительные персоны'

    def __str__(self):
        return f'{self.first_name} {self.last_name}'


class RegistrationToDiscipline(models.Model):
    user = models.ForeignKey(
        'users.User',
        verbose_name='Ученик',
        related_name='discipline_user',
        on_delete=models.CASCADE
    )
    discipline = models.ForeignKey(
        Discipline,
        on_delete=models.CASCADE,
        verbose_name='Тип дисциплины'
    )
    type_lessons = models.ForeignKey(
        TypeLesson,
        on_delete=models.CASCADE,
        verbose_name='Вид занятий'
    )
    count_lessons = models.ForeignKey(
        CountLesson,
        on_delete=models.CASCADE,
        verbose_name='Количество уроков'
    )
    count_people = models.IntegerField(
        default=1,
        verbose_name='Количество человек'
    )
    additional_person = models.ForeignKey(
        AdditionalPerson,
        on_delete=models.CASCADE,
        verbose_name='Дополнительная персона',
        null=True,
        blank=True
    )
    date = models.CharField(
        max_length=255,
        verbose_name='Дата занятий'
    )
    time = models.CharField(
        max_length=255,
        verbose_name='Время занятий'
    )
    start_lessons = models.CharField(
        max_length=255,
        verbose_name='Старт занятий'
    )
    type_payment = models.CharField(
        max_length=255,
        verbose_name='Тип оплаты'
    )

    class Meta:
        verbose_name = 'Запись на дисциплину'
        verbose_name_plural = 'Записи на дисциплины'
        ordering = ('-pk',)

    def __str__(self):
        return str(self.discipline)