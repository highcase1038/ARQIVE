from requests import Response
from rest_framework import filters, status
from django.db.models import IntegerField
from django.db.models import Case, CharField, Value
from django.db.models import F, Q, When
from django.db.models import Count, Sum, Value
from django.db.models.functions import Coalesce
from django_filters.rest_framework import DjangoFilterBackend
from django.contrib.auth.models import User
import django_filters
from django_filters import FilterSet, Filter
from django_filters.fields import Lookup
from rest_framework import viewsets, permissions
from rest_framework.views import APIView
from rest_framework.response import Response


from pins.models import pin
import subprocess
import logging

logger = logging.getLogger(__name__)
class RunAcmView(APIView):
    
    def get(self, request, format=None):
        """Here we can implement logic to call the the ACM script"""
        """The script can also access the postgresql DB through psycopg2 in python"""
        """Implementation like this means future efforts only need to change what script this API calls"""
        """I dont think this api has to return anything major, maybe just a boolean which triggers the"""
        """frontend to recall all the pins again to reflect the new flags"""
        output = subprocess.check_output(['python3', 'acm/run_acm.py'])
        return Response({'completed' : True})