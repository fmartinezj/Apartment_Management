from django.db import models
from expense_records.models import ExpenseRecord
from rental_income_records.models import RentalIncomeRecord

class AnnualReports(models.Model):
    category = models.ForeignKey(ExpenseRecord, on_delete=models.CASCADE)
    rent = models.FloatField(RentalIncomeRecord.total_rent, default=0.00)
    
    def __str__(self):
        return self.category
