from django.conf.urls import include, url
from AdTominApps.expenses.views import index

urlpatterns = [
    url(r'^$', index),
]