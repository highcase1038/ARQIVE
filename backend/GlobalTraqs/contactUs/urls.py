# Old Import, now using re_path to be able to user regular expressions in django 4.0
#from django.conf.urls import url, include
from django.urls import re_path
from . import views

urlpatterns = [
    re_path(r'^', views.email),
    re_path(r'support/', views.supportEmail)
]
