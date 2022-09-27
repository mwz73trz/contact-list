from email.policy import default
from django.db import models

class Contact(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    address = models.CharField(max_length=100)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=25)
    zipcode = models.CharField(max_length=5)
    phone = models.CharField(max_length=12, default='XXX-XXX-XXXX')
    email = models.EmailField()

    def __str__(self):
        return f'{self.first_name} {self.last_name}'