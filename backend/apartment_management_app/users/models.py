# Register your models here.
from django.db import models

class User(models.Model):
    username = models.CharField("username", max_length=240)
    password = models.CharField("password", max_length=240)

    def __str__(self):
        return self.username