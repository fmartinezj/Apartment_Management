from rest_framework import serializers
from .models import Tenant

class TenantSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tenant 
        fields = ['pk', 'first_name', 'last_name', 'apartment_number', 'phone_number', 'email', 'lease_start']