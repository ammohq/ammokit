from allauth.account.adapter import DefaultAccountAdapter
from rest_framework import status
from rest_framework.response import Response


class AccountAdapter(DefaultAccountAdapter):

    def is_open_for_signup(self, request):
        return True

    def respond_email_verification_sent(self, request, user):
        """ API response for successful registration.
            Verification email has been sent
        """
        return Response(status=status.HTTP_201_CREATED)
