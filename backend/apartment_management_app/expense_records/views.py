from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import ExpenseRecord
from .serializers import *

@api_view(['GET', 'POST'])
def expense_records_list(request):
    if request.method == 'GET':
        data = ExpenseRecord.objects.all()

        serializer = ExpenseRecordSerializer(data, context={'request': request}, many=True)

        return ExpenseRecord(serializer.data)

    elif request.method == 'POST':
        serializer = ExpenseRecordSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return ExpenseRecord(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def expense_records_detail(request, pk):
    try:
        expense_record = ExpenseRecord.objects.get(pk=pk)
    except ExpenseRecord.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = ExpenseRecordSerializer(expense_record, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        expense_record.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)