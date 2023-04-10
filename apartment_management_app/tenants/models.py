from django.db import models

# Create your models here.

class Tenant(models.Model):
    first_name = models.CharField("FirstName", max_length=240, default="")
    last_name = models.CharField("LastNName", max_length=240, default="")

    def __str__(self):
        return self.first_name + self.last_name