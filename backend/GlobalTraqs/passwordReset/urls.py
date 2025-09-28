""" URL Configuration for core auth
"""
# Old Import, replaced url with re_path
#from django.conf.urls import url, include
from django.urls import re_path
from .views import reset_password_request_token, reset_password_confirm
from .views import reset_password_validate_token

app_name = 'password_reset'

urlpatterns = [
    re_path(r'^validate_token/', reset_password_validate_token, name="reset-password-validate"),
    re_path(r'^confirm/', reset_password_confirm, name="reset-password-confirm"),
    re_path(r'^', reset_password_request_token, name="reset-password-request"),
]