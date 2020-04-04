from django.conf.urls import include, url
from AdTominApps.users.views import index_usuario

urlpatterns = [
    url(r'^index$', index_usuario),
]