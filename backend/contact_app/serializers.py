from rest_framework.serializers import ModelSerializer
from .models import *

class ContactSerializer(ModelSerializer):
    class Meta:
        model = Contact
        fields = ['id', 'first_name', 'last_name', 'address', 'city', 'state', 'zipcode', 'phone', 'email']