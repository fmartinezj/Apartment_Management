# Generated by Django 4.2 on 2023-05-01 01:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('expense_records', '0002_expense_records'),
    ]

    operations = [
        migrations.CreateModel(
            name='AnnualReports',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='expense_records.expenserecord')),
            ],
        ),
    ]