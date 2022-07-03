import { useState, useEffect } from 'react'
import './App.css'

interface IInterestResponse {
  one_year: number,
  five_years: number,
  ten_years: number,
  twenty_years: number,
  fifty_years: number
}

class InterestResponse implements IInterestResponse {
  one_year = 515.00;
  five_years = 579.64;
  ten_years = 671.96;
  twenty_years = 903.06;
  fifty_years = 2191.95;
}

const API = 'http://localhost:8000'

let csrfToken: string = ''

const getCsrfToken = async () => {
  if (csrfToken === '') {
    const resp = await fetch(`${API}/calculations/csrf/`, {
      credentials: 'include',
    })

    const data = await resp.json()
    csrfToken = data.csrfToken
  }

  return csrfToken
}

const testRequest = async (method: string) => {
  const resp = await fetch(`${API}/calculations/ping/`, {
    method: method,
    headers: (
      method === 'POST'
        ? { 'X-CSRFToken': await getCsrfToken() }
        : {}
    ),
    credentials: 'include',
  })

  const data = await resp.json()
  return data.result
}

function App() {
  const [principal, setPrincipal] = useState(500)
  const [interestRate, setInterestRate] = useState(3)
  const [amountValues, setAmountValues] = useState<InterestResponse>(new InterestResponse())


  useEffect(() => {
    if (document.cookie && document.cookie !== '') {
      let cookieString: string = document.cookie
      let cookies: string[] = cookieString.split(";")
      for (let index = 0; index < cookies.length; index++) {
        const element = cookies[index].trim()

        if (element.substring(0, 10) == ("csrftoken=")) {
          csrfToken = element.slice(10, element.length)
        }
      }
    } else {
      getCsrfToken()
    }
  }, [])

  useEffect(() => {
    async function CalculateValues() {
      let requestOptions: RequestInit = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrfToken,
        },
        credentials: 'include',
        body: JSON.stringify({
          principal: principal,
          interest_rate: interestRate
        })
      }

      await fetch('http://localhost:8000/calculations/api/', requestOptions)
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          let obj = json as IInterestResponse
          console.log(obj)
          setAmountValues(obj)
        });
    }

    if (csrfToken !== '') {
      CalculateValues()
    }
  }, [principal, interestRate])

  const validateAmount = (amount: number) => {
    if (Math.sign(interestRate) == -1) {
      return 'Value is Invalid'
    }

    return amount.toFixed(2)
  }

  return (
    <div className="App">
      <h1>Compound Interest Calculator</h1>
      <p>Please input your initial principal amount and select your annual interest rate</p>
      <label>Principal</label>
      <input type="number" value={principal} onChange={(e) => setPrincipal(parseInt(e.target.value))} />
      <br />
      <label>Interest Rate</label>
      <input type="number" value={interestRate} min={1} onChange={(e) => setInterestRate(parseInt(e.target.value))} />
      <br />
      <h2>1 Year Amount: £{validateAmount(amountValues.one_year)}</h2>
      <h2>5 Year Amount: £{validateAmount(amountValues.five_years)}</h2>
      <h2>10 Year Amount: £{validateAmount(amountValues.ten_years)}</h2>
      <h2>20 Year Amount: £{validateAmount(amountValues.twenty_years)}</h2>
      <h2>50 Year Amount: £{validateAmount(amountValues.fifty_years)}</h2>
    </div>
  )
}

export default App
