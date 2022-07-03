class Calculator():
    def calculate_compound_interest(self, principal, interest_rate, time):
        if principal == 0 or interest_rate == 0 or time == 0:
            return "value cannot be 0"

        interest_rate = interest_rate / 100

        return principal * (1 + interest_rate)**time
        