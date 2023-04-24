from django.db import models

# Create your models here.

class Tenant(models.Model):
    first_name = models.CharField("First Name", max_length=240, default="")
    last_name = models.CharField("Last Name", max_length=240, default="")
    apartment_number = models.IntegerField("Apartment Number", default=0)
    phone_number = models.CharField("Phone Number", max_length=20, default="")
    email = models.CharField("Email", max_length=240, default="")
    lease_start = models.DateField("Lease Start", null = True)

    def __str__(self):
        return self.first_name