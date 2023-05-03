from rest_framework import serializers
from .models import AnnualReports

class AnnualReportSerializer(serializers.ModelSerializer):

    class Meta:
        model = AnnualReports 
        fields = ['pk', 'category', 'rent']