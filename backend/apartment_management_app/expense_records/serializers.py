from rest_framework import serializers
from .models import Expense_Record

class Expense_RecordSerializer(serializers.ModelSerializer):

    class Meta:
        model = Expense_Record
        fields = ('date', 'payee', 'amount', 'budget_category')