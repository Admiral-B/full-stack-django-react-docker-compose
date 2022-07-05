from django.shortcuts import render
from django.http import HttpResponse, JsonResponse, Http404
from django.middleware.csrf import get_token
from calculations.calculator import Calculator

import json

# Create your views here.
def index(request):
    return HttpResponse("Index endpoint")

def csrf(request):
    return JsonResponse({'csrfToken': get_token(request)})

def ping(request):
    return JsonResponse({'result': 'OK'})

def api(request):
    if request.method == "POST":
        body_data = json.loads(request.body)
        principal = body_data['principal']
        interest_rate = body_data['interest_rate']
        monthly_deposit = body_data['monthly_deposit']

        return JsonResponse(Calculator().calculate_compound_interest(principal, interest_rate, monthly_deposit))

    else:
        raise Http404("Invalid Request")