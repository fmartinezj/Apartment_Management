from django.db import models

# Create your models here.

class RentalIncomeRecord(models.Model):
    apartment_number = models.IntegerField("Apartment Number", default=0)
    january = models.FloatField("January", default=0.0)
    february = models.FloatField("February", default=0.0)
    march = models.FloatField("March", default=0.0)
    april = models.FloatField("April", default=0.0)
    may = models.FloatField("May", default=0.0)
    june = models.FloatField("June", default=0.0)
    july = models.FloatField("July", default=0.0)
    august = models.FloatField("August", default=0.0)
    september = models.FloatField("September", default=0.0)
    october = models.FloatField("October", default=0.0)
    november = models.FloatField("November", default=0.0)
    december = models.FloatField("December", default=0.0)
    total = models.FloatField("Total", default=0.0)


    @property
    def total_rent(self):
        return (RentalIncomeRecord.january + RentalIncomeRecord.february + RentalIncomeRecord.march + RentalIncomeRecord.april + 
                RentalIncomeRecord.may + RentalIncomeRecord.june + RentalIncomeRecord.july + RentalIncomeRecord.august + 
                RentalIncomeRecord.september + RentalIncomeRecord.october + RentalIncomeRecord.november + RentalIncomeRecord.december)
    
    def __str__(self):
        return self.apartment_number