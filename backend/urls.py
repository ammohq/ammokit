from django.conf import settings
from django.conf.urls import include, url
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path
from rest_framework import routers

from apps.auth.views import ConfirmEmailView, TestAuthAPIViewSet
from apps.main.views import robots, health_check, MainViewSet

admin.site.site_header = settings.SITE_ADMIN_TITLE

router = routers.DefaultRouter()

urlpatterns = [
    path('api/', include(router.urls)),

    url(r'^api/auth/', include('rest_auth.urls')),
    url(r'^api/auth/register/', include('rest_auth.registration.urls')),

    url(r"^confirm-email/(?P<key>[-:\w]+)/$",
        ConfirmEmailView.as_view(), name="account_confirm_email"
    ),

    url(r"^api/auth/test/$",
        TestAuthAPIViewSet.as_view({'get': 'get'}), name="auth_test"
    ),

    path('robots.txt', robots),
    url(r'^rabbit/$', health_check, name='health_check'),

    path('admin/', admin.site.urls),

    url(r'^$', MainViewSet.as_view({'get': 'retrieve'}), name="main"),
]

if settings.DEBUG:
    urlpatterns += static(
        settings.STATIC_URL, document_root=settings.STATIC_ROOT
    )
    urlpatterns += static(
        settings.MEDIA_URL, document_root=settings.MEDIA_ROOT
    )
