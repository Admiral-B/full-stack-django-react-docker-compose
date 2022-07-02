from django.db import models

# Create your models here.
class Calculation(models.Model):
    time = models.DateTimeField('time of calculation')
    principle_amount = models.DecimalField(0, max_digits=13, decimal_places=2)
