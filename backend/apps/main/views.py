from django.conf import settings
from django.http import HttpResponse, HttpResponseRedirect
from rest_framework.permissions import AllowAny
from rest_framework.renderers import TemplateHTMLRenderer
from rest_framework.viewsets import ViewSet


def robots(request):
    """ robot.txt <http://www.robotstxt.org>
    """
    return HttpResponse('User-agent: *\nDisallow: /')


class HTMLViewSet(ViewSet):
    """ ViewSet for serving the HTML-pages.
        This prevents it from showing up in generated API docs.
    """
    exclude_from_schema = True


class MainViewSet(HTMLViewSet):
    """ Redirects to frontend
    """
    renderer_classes = (TemplateHTMLRenderer,)
    permission_classes = (AllowAny,)

    def retrieve(self, request, *args, **kwargs):
        return HttpResponseRedirect(settings.FRONTEND_URL)


def health_check(request):
    """ Health-check url called by AWS ELB load-balancer.

         (\___(\
         ( -   -)
        C((')___(')
    """
    return HttpResponse(content="OK", status=200)
