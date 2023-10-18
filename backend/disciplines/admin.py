from django.contrib import admin

from .models import (AdditionalPerson, Cost, CostType, CountLesson, Discipline,
                     DisciplineTeacher, Future, RegistrationToDiscipline,
                     Skill, Teacher, TeacherInfo, TypeLesson)


@admin.register(CostType)
class CostAdmin(admin.ModelAdmin):
    list_display = (
        'name',
    )


@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = (
        'name',
    )


@admin.register(Cost)
class CostAdmin(admin.ModelAdmin):
    list_display = (
        'name',
        'price',
        'type'
    )


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
    list_display = (
        'name',
        'lesson_duration',
        'recommended_lesson_count'
    )
    search_fields = ('name',)
    list_filter = ('name', 'lesson_duration')


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


@admin.register(Future)
class FutureAdmin(admin.ModelAdmin):
    list_display = (
        'name',
    )


@admin.register(DisciplineTeacher)
class DisciplineTeacherAdmin(admin.ModelAdmin):
    list_display = ('name', 'attr')


@admin.register(Teacher)
class TeacherAdmin(admin.ModelAdmin):
    list_display = ('name', 'full_name', 'user')
    list_filter = ('disciplines', 'skills')
    search_fields = ('name', 'full_name', 'user__username')
    filter_horizontal = ('disciplines', 'skills')


@admin.register(TeacherInfo)
class TeacherInfoAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'user')
    list_filter = ('disciplines', 'skills')
    search_fields = ('full_name', 'user__username')
    filter_horizontal = ('disciplines', 'skills')


@admin.register(RegistrationToDiscipline)
class RegistrationAdmin(admin.ModelAdmin):
    list_display = (
        'user',
        'discipline',
        'type_lessons',
        'count_lessons',
        'count_people',
        'lesson_dates',
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
