from django.db import models

# Create your models here.

class Expense_Record(models.Model):
    date = models.DateField("Date")
    payee = models.CharField("Payee", max_length=240)
    amount = models.FloatField("Amount")
    budget_category = models.CharField("Budget_Category", max_length=240)

    def __str__(self):
        return self.date
