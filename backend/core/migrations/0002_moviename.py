# Generated by Django 4.2.5 on 2023-09-28 07:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='MovieName',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nameEn', models.CharField(max_length=100)),
                ('NameTr', models.CharField(max_length=100)),
                ('NameAr', models.CharField(max_length=100)),
                ('NameFr', models.CharField(max_length=100)),
                ('year', models.IntegerField()),
            ],
        ),
    ]
