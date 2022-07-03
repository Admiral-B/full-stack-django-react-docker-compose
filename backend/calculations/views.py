from django.shortcuts import render
from django.http import HttpResponse, JsonResponse, Http404
from calculations.calculator import Calculator

# Create your views here.
def index(request):
    return HttpResponse("Index endpoint")

def api(request):
    if request.method == "POST":
        principal = request.POST.principal
        interest_rate = request.POST.interest_rate
    
        one_year = Calculator().calculate_compound_interest(principal, interest_rate, 1)
        five_years = Calculator().calculate_compound_interest(principal, interest_rate, 5)
        ten_years = Calculator().calculate_compound_interest(principal, interest_rate, 10)
        twenty_years = Calculator().calculate_compound_interest(principal, interest_rate, 20)
        fifty_years = Calculator().calculate_compound_interest(principal, interest_rate, 50)

        return JsonResponse({
            'one year': one_year,
            'five_years': five_years,
            'ten_years': ten_years,
            'twenty_years': twenty_years,
            'fifty_years': fifty_years
        })

    else:
        raise Http404("Invalid Request")