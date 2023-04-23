from rest_framework import serializers
from .models import Tenant

class TenantSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tenant 
        fields = ['pk', 'first_name', 'last_name']