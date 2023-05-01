from django.shortcuts import render
from django.db.models import F, Sum

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from expense_records.models import ExpenseRecord
from rental_income_records.models import RentalIncomeRecord
from .models import AnnualReports
from .serializers import *

@api_view(['GET', 'POST'])
# Create your views here.
def annual_reports_list(request):
    if request.method == 'GET':
        data = RentalIncomeRecord.objects.aggregate(total=Sum(F('progress') * F('estimated_days')))['total']
        serializer = AnnualReportSerializer(data, context={'request' : request}, many = True)
        return Response(serializer.data)                           
    elif request.method == 'POST':
        serializer = AnnualReportSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED, data=serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['PUT', 'DELETE'])
def annual_reports_detail(request, pk):
    try:
        annual_report = RentalIncomeRecord.objects.get(pk=pk)
    except RentalIncomeRecord.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'PUT':
        serializer = AnnualReportSerializer(annual_report, data=request.data, context={'request' : request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        annual_report.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    