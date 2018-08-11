from allauth.account.models import EmailConfirmationHMAC, EmailConfirmation
from django.conf import settings
from django.core.exceptions import ObjectDoesNotExist
from django.http import HttpResponseRedirect
from django.views import View
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.viewsets import ViewSet


class TestAuthAPIViewSet(ViewSet):
    """
    """
    permission_classes = (IsAuthenticated,)

    def get(self, *args, **kwargs):
        return Response(status.HTTP_204_NO_CONTENT)


class ConfirmEmailView(View):
    def get(self, *args, **kwargs):
        return self.post(*args, **kwargs)

    def post(self, *args, **kwargs):
        try:
            key = kwargs['key']
            confirmation = self.get_object(key)
        except (KeyError, ObjectDoesNotExist):
            return HttpResponseRedirect(settings.FRONTEND_URL)

        confirmation.confirm(self.request)
        return HttpResponseRedirect(
            '{}login/?confirmed=true'.format(settings.FRONTEND_URL)
        )

    def get_object(self, key):
        confirmation = EmailConfirmationHMAC.from_key(key)
        if confirmation is None:
            try:
                qs = EmailConfirmation.objects.all_valid()
                confirmation = qs.select_related(
                    'email_address__user'
                ).get(key=key.lower())
            except ObjectDoesNotExist:
                raise
        return confirmation
