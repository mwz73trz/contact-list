from rest_framework.viewsets import ModelViewSet
from rest_framework import filters
from .serializers import ContactSerializer
from .models import *

class ContactViewSet(ModelViewSet):
    search_fields = ['first_name', 'last_name']
    filter_backends = (filters.SearchFilter,)
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
