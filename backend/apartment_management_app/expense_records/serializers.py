from rest_framework import serializers
from .models import ExpenseRecord

class ExpenseRecordSerializer(serializers.ModelSerializer):

    class Meta:
        model = ExpenseRecord 
        fields = ['pk', 'date', 'payee', 'amount', 'budget_category']