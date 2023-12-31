from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

from users.validators import validate_phone_number


class Skill(models.Model):
    name = models.CharField(
        max_length=255,
        verbose_name='Название навыка'
    )

    class Meta:
        verbose_name = 'Навык'
        verbose_name_plural = 'Навыки'
        ordering = ['name']

    def __str__(self):
        return self.name


class CostType(models.Model):
    name = models.CharField(
        max_length=255,
        verbose_name='Тип стоимости'
    )

    class Meta:
        verbose_name = 'Тип стоимости'
        verbose_name_plural = 'Типы стоимостей'
        ordering = ['name']

    def __str__(self):
        return self.name


class Future(models.Model):
    name = models.CharField(
        max_length=255,
        verbose_name='Навык, полученный на занятии'
    )

    class Meta:
        verbose_name = 'Навык, полученный на занятии'
        verbose_name_plural = 'Навык, полученный на занятии'
        ordering = ['name']

    def __str__(self):
        return self.name


class Cost(models.Model):
    name = models.CharField(
        max_length=255,
        verbose_name='Название'
    )
    price = models.CharField(
        max_length=35,
        verbose_name='Цена'
    )
    type = models.ForeignKey(
        CostType,
        on_delete=models.CASCADE,
        verbose_name='Тип стоимости'
    )

    class Meta:
        verbose_name = 'Стоимость'
        verbose_name_plural = 'Стоимости'
        ordering = ['name']

    def __str__(self):
        return f'{self.name} - {self.price}: {self.type}'


class Discipline(models.Model):
    user = models.ManyToManyField(
        'users.User',
        verbose_name='Преподаватель',
        related_name='discipline_teacher_set',
    )
    name = models.CharField(
        max_length=255,
        verbose_name='Название дисциплины'
    )
    name_sklonenie = models.CharField(
        max_length=255,
        blank=True,
        verbose_name='Склонение имени'
    )
    image_url = models.ImageField(
        upload_to='backend_media/',
        verbose_name='Изображение'
    )
    description = models.TextField(verbose_name='Описание дисциплины')
    lesson_duration = models.CharField(
        max_length=35,
        verbose_name='Продолжительность урока'
    )
    skills = models.ManyToManyField(Skill, verbose_name='Навык')
    cost = models.ManyToManyField(
        'Cost',
        related_name='disciplines',
        verbose_name='Тип стоимости'
    )
    recommended_lesson_count = models.IntegerField(
        default=30,
        verbose_name='Рекомендуемое кол-во уроков'
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
        on_delete=models.CASCADE,
    )
    discipline = models.ForeignKey(
        Discipline,
        on_delete=models.CASCADE,
        verbose_name='Тип дисциплины'
    )
    teacher = models.ForeignKey(
        'users.User',
        on_delete=models.CASCADE,
        related_name='teacher_user',
        verbose_name='Преподаватель',
        blank=True,
        null=True
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
    lesson_dates = models.JSONField(
        verbose_name='Даты и время занятий',
        default=list,
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
        return f'{str(self.discipline)} - {self.user}'


class DisciplineTeacher(models.Model):
    name = models.CharField(max_length=255, verbose_name='Название')
    attr = models.CharField(max_length=255, verbose_name='Атрибут')

    class Meta:
        verbose_name = 'Дисциплина преподавателя'
        verbose_name_plural = 'Дисциплины преподавателя'

    def __str__(self):
        return f'{self.name} {self.attr}'


class Teacher(models.Model):
    user = models.ForeignKey(
        'users.User',
        verbose_name='Преподаватель',
        related_name='discipline_teacher',
        on_delete=models.CASCADE
    )
    name = models.CharField(max_length=255)
    full_name = models.CharField(max_length=255)
    image_url = models.ImageField(
        upload_to='backend_media/',
        verbose_name='Изображение'
    )
    description = models.TextField()
    disciplines = models.ManyToManyField(
        DisciplineTeacher,
        verbose_name='Дисциплина',
        related_name='discipline_teacher'
    )
    skills = models.ManyToManyField(Skill, verbose_name='Навыки преподавателя')
    greetings = models.TextField(verbose_name='Приветствие')
    unique = models.TextField(verbose_name='Уникальность занятий')
    future = models.ForeignKey(
        Future,
        on_delete=models.CASCADE,
        verbose_name='Навыки, которые будут получены'
    )

    class Meta:
        verbose_name = 'Преподаватель'
        verbose_name_plural = 'Преподаватели'

    def __str__(self):
        return self.name


class TeacherInfo(models.Model):
    user = models.ForeignKey(
        'users.User',
        verbose_name='Преподаватель',
        related_name='teacher_discipline_set',
        on_delete=models.CASCADE
    )
    full_name = models.CharField(max_length=100)
    disciplines = models.ManyToManyField(
        DisciplineTeacher,
        verbose_name='Дисциплина',
        related_name='discipline_teacher_info'
    )
    skills = models.ManyToManyField(Skill, verbose_name='Навыки преподавателя')
    greetings = models.TextField(verbose_name='Приветствие')
    unique = models.TextField(verbose_name='Уникальность занятий')
    future = models.ForeignKey(
        Future,
        on_delete=models.CASCADE,
        verbose_name='Навыки, которые будут получены'
    )

    class Meta:
        verbose_name = 'Информация преподавателя'
        verbose_name_plural = 'Информации преподавателя'

    def __str__(self):
        return self.full_name
