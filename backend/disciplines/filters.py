import django_filters

from .models import RegistrationToDiscipline


class RegistrationFilter(django_filters.FilterSet):
    user__first_name = django_filters.CharFilter(
        lookup_expr='icontains',
        field_name='user__first_name',
        label='User First Name'
    )
    user__last_name = django_filters.CharFilter(
        lookup_expr='icontains',
        field_name='user__last_name',
        label='User Last Name'
    )
    discipline__name = django_filters.CharFilter(
        lookup_expr='icontains',
        field_name='discipline__name',
        label='Discipline Name'
    )
    type_lessons__name = django_filters.CharFilter(
        lookup_expr='icontains',
        field_name='type_lessons__name',
        label='Type Lessons Name'
    )
    count_lessons__name = django_filters.CharFilter(
        lookup_expr='icontains',
        field_name='count_lessons__name',
        label='Count Lessons Name'
    )
    count_people = django_filters.NumberFilter(
        field_name='count_people',
        lookup_expr='exact',
        label='Count People'
    )
    additional_person__first_name = django_filters.CharFilter(
        lookup_expr='icontains',
        field_name='additional_person__first_name',
        label='Additional Person First Name'
    )
    additional_person__last_name = django_filters.CharFilter(
        lookup_expr='icontains',
        field_name='additional_person__last_name',
        label='Additional Person Last Name'
    )
    date = django_filters.CharFilter(
        lookup_expr='icontains',
        field_name='date',
        label='Date'
    )
    time = django_filters.CharFilter(
        lookup_expr='icontains',
        field_name='time',
        label='Time'
    )
    start_lessons = django_filters.CharFilter(
        lookup_expr='icontains',
        field_name='start_lessons',
        label='Start Lessons'
    )
    type_payment = django_filters.CharFilter(
        lookup_expr='icontains',
        field_name='type_payment',
        label='Type Payment'
    )

    class Meta:
        model = RegistrationToDiscipline
        fields = (
            'user__first_name',
            'user__last_name',
            'discipline__name',
            'type_lessons__name',
            'count_lessons__name',
            'count_people',
            'additional_person__first_name',
            'additional_person__last_name',
            'date',
            'time',
            'start_lessons',
            'type_payment',
        )
