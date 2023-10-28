from django.urls import include, path
from djoser.views import TokenCreateView

from .views import TokenCreateByPhoneView, send_email, UserList, send_application, send_first_lesson

urlpatterns = [
    path('', include('djoser.urls')),
    path('all-users/', UserList.as_view(), name='all_users'),
    path('auth/', include('djoser.urls.authtoken')),
    path('auth/token-email/',
         TokenCreateView.as_view(),
         name='token_email'
         ),
    path(
        'auth/token-phone/',
        TokenCreateByPhoneView.as_view(),
        name='token_phone'
    ),
    path('send-email/', send_email, name='send_email'),
    path('send-application/', send_application, name='send_application'),
    path('send-first-lesson/', send_first_lesson, name='send_first_lesson'),
]
