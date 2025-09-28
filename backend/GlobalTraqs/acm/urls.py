from django.urls import path
from acm import views

urlpatterns = [
    path('api/runacm', views.RunAcmView.as_view()),
]

