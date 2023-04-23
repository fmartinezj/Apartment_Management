from rest_framework import serializers
from .models import Rental_Income_Record

class Rental_Income_RecordSerializer(serializers.ModelSerializer):

    class Meta:
        model = Rental_Income_Record
        fields = ('apartment_number', 'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december')