from django.db import models

class ExpenseRecord(models.Model):
    date = models.CharField("Date")
    payee = models.CharField("Payee", max_length=240)
    amount = models.FloatField("Amount")
    budget_category = models.CharField("Budget Category", max_length=240)

    # @property
    # def total_amount_mortgage(self):
    #     if self.budget_category.lower() == "morgage":
    #         for 

    def __str__(self):
        return self.date