from django.contrib import admin

from .models import (AdditionalPerson, CountLesson, Discipline,
                     RegistrationToDiscipline, TypeLesson)


@admin.register(AdditionalPerson)
class AdditionalPersonAdmin(admin.ModelAdmin):
    list_display = (
        'first_name',
        'last_name',
        'date_of_birth',
        'phone',
        'discipline',
    )
    list_display_links = ('first_name',)
    search_fields = ('phone', 'first_name', 'last_name')


@admin.register(Discipline)
class DisciplineAdmin(admin.ModelAdmin):
    list_display = ('name',)
    list_display_links = ('name',)
    search_fields = ('name',)


@admin.register(TypeLesson)
class TypeLessonAdmin(admin.ModelAdmin):
    list_display = ('name',)
    list_display_links = ('name',)
    search_fields = ('name',)


@admin.register(CountLesson)
class CountLessonAdmin(admin.ModelAdmin):
    list_display = ('name',)
    list_display_links = ('name',)
    search_fields = ('name',)


@admin.register(RegistrationToDiscipline)
class RegistrationAdmin(admin.ModelAdmin):
    list_display = (
        'user',
        'discipline',
        'type_lessons',
        'count_lessons',
        'count_people',
        'date',
        'time',
        'start_lessons',
        'type_payment'
    )
    search_fields = (
        'discipline__name',
        'type_lessons__name',
        'count_lessons__name',
        'date',
        'time',
        'start_lessons',
        'type_payment'
    )
