from django.db import models

# Create your models here.

class Rental_Income_Record(models.Model):
    apartment_number = models.IntegerField("Apartment_Number")
    january = models.FloatField("January")
    february = models.FloatField("February")
    march = models.FloatField("March")
    april = models.FloatField("April")
    may = models.FloatField("May")
    june = models.FloatField("June")
    july = models.FloatField("July")
    august = models.FloatField("August")
    september = models.FloatField("September")
    october = models.FloatField("October")
    november = models.FloatField("November")
    december = models.FloatField("December")

    def __str__(self):
        return self.apartment_number