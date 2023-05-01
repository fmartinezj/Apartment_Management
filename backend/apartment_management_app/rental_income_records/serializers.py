from rest_framework import serializers
from .models import RentalIncomeRecord

months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']

class RentalIncomeRecordSerializer(serializers.ModelSerializer):

    class Meta:
        model = RentalIncomeRecord 
        fields = ['pk', 'apartment_number', 'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december', 'total']

    def create(self, validated_data):
        rental_total = 0.0
        print(validated_data)
        for month in months:
            rental_total += validated_data.get(month, 0.0)
        validated_data["total"] = rental_total
        return RentalIncomeRecord.objects.create(**validated_data)

    def update(self, instance, validated_data):
        rental_total = 0.0
        for month in months:
            rental_total += validated_data.get(month, 0.0)
        instance.total = rental_total
        instance.save()
        return instance

class RentalIncomeRecordSummarySerializer(serializers.ModelSerializer):

    class Meta:
        model = RentalIncomeRecord 
        fields = ['total']