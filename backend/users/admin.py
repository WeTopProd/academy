from django.contrib import admin
from django.contrib.auth.models import Group

from .models import User, Schedule, ScheduleInfo


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = (
        'email',
        'first_name',
        'last_name',
        'phone',
        'date_of_birth',
        'user_type'
    )
    ordering = ('email', )
    search_fields = ('email', 'phone',  'first_name', 'last_name')
    list_filter = ('email', 'phone')


@admin.register(Schedule)
class ScheduleAdmin(admin.ModelAdmin):
    list_display = (
        'user',
        'discipline',
    )
    ordering = ('-pk', )
    search_fields = ('discipline', )
    list_filter = ('discipline',)


@admin.register(ScheduleInfo)
class ScheduleInfoAdmin(admin.ModelAdmin):
    list_display = (
        'date',
        'start_time',
        'end_time'
    )
    list_filter = ('date', 'start_time', 'end_time')


admin.site.unregister(Group)
