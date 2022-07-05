class Calculator():
    def calculate_compound_interest(self, principal, interest_rate, monthly_deposit):
        if principal <= 0 or interest_rate <= 0 or monthly_deposit <= 0:
            return "value cannot be 0"

        main_interest_rate = interest_rate / 100
        plus_one_interest_rate = (interest_rate+1) / 100
        plus_two_interest_rate = (interest_rate+2) / 100

        initial_chart_value = {
            'Year': 0,
            'Amount': principal
        }

        main_series = [initial_chart_value]
        plus_one_series = [initial_chart_value]
        plus_two_series = [initial_chart_value]

        for i in range(1, 51):
            main_series.append({
                'Year': i,
                'Amount': float(format((self.increaseInMonthlyDeposit(monthly_deposit, self.interest(main_interest_rate, i), main_interest_rate) + self.increaseInPrincipal(principal, self.interest(main_interest_rate, i))), ".2f"))
            })

            plus_one_series.append({
                'Year': i,
                'Amount': float(format((self.increaseInMonthlyDeposit(monthly_deposit, self.interest(plus_one_interest_rate, i), plus_one_interest_rate) + self.increaseInPrincipal(principal, self.interest(plus_one_interest_rate, i))), ".2f"))
            })

            plus_two_series.append({
                'Year': i,
                'Amount': float(format((self.increaseInMonthlyDeposit(monthly_deposit, self.interest(plus_two_interest_rate, i), plus_two_interest_rate) + self.increaseInPrincipal(principal, self.interest(plus_two_interest_rate, i))), ".2f"))
            })

        return {
            'main_series': main_series,
            'plus_one_series': plus_one_series,
            'plus_two_series': plus_two_series
        }

    def interest(self, interest_rate, time):
        return (1 + (interest_rate / 12))**(time * 12)

    def increaseInPrincipal(self, principal, interest):
        return (principal * interest)

    def increaseInMonthlyDeposit(self, month_dep, interest, interest_rate):
        return (month_dep * ((interest - 1) / (interest_rate / 12)))
