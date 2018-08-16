from django.conf import settings
from rest_auth.serializers import \
    PasswordResetSerializer as _PasswordResetSerializer


class PasswordResetSerializer(_PasswordResetSerializer):
    """
    Serializer for requesting a password reset e-mail.
    Overriding to set the frontend domain.
    """

    def get_email_options(self):
        return {
            'domain_override': settings.FRONTEND_DOMAIN
        }
