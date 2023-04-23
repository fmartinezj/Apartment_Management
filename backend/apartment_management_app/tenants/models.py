from django.db import models

# Create your models here.

class Tenant(models.Model):
    first_name = models.CharField("FirstName", max_length=240, default="")
    last_name = models.CharField("LastName", max_length=240, default="")
    apartment_number = models.IntegerField("ApartmentNumber", default=0)

    def __str__(self):
        return self.first_name