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
    
        one_year = Calculator().calculate_compound_interest(principal, interest_rate, 1)
        five_years = Calculator().calculate_compound_interest(principal, interest_rate, 5)
        ten_years = Calculator().calculate_compound_interest(principal, interest_rate, 10)
        twenty_years = Calculator().calculate_compound_interest(principal, interest_rate, 20)
        fifty_years = Calculator().calculate_compound_interest(principal, interest_rate, 50)

        return JsonResponse({
            'one_year': one_year,
            'five_years': five_years,
            'ten_years': ten_years,
            'twenty_years': twenty_years,
            'fifty_years': fifty_years
        })

    else:
        raise Http404("Invalid Request")