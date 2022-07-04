class Calculator():
    def calculate_compound_interest(self, principal, interest_rate):
        if principal == 0 or interest_rate == 0:
            return "value cannot be 0"

        main_interest_rate = interest_rate / 100
        plus_one_interest_rate = (interest_rate+1) / 100
        plus_two_interest_rate = (interest_rate+2) / 100

        main_series = []
        plus_one_series = []
        plus_two_series = []

        for i in range(0, 21):
            main_series.append({
                'Year': i,
                'Amount': float(format(principal * (1 + main_interest_rate)**i, ".2f"))
            })

            plus_one_series.append({
                'Year': i,
                'Amount': float(format(principal * (1 + plus_one_interest_rate)**i, ".2f"))
            })

            plus_two_series.append({
                'Year': i,
                'Amount': float(format(principal * (1 + plus_two_interest_rate)**i, ".2f"))
            })

        return {
            'main_series': main_series,
            'plus_one_series': plus_one_series,
            'plus_two_series': plus_two_series
        }
