import { useState, useEffect } from 'react'
import './App.css'

interface IInterestResponse {
  one_year: number,
  five_year: number,
  ten_year: number,
  twenty_year: number,
  fifty_year: number
}

class InterestResponse implements IInterestResponse {
  one_year = 515.00;
  five_year = 579.64;
  ten_year = 671.96;
  twenty_year = 903.06;
  fifty_year = 2191.95;
}

function App() {
  let csrfToken: string = ''
  const [principal, setPrincipal] = useState(500)
  const [interestRate, setInterestRate] = useState(3)
  const [amountValues, setAmountValues] = useState<InterestResponse>(new InterestResponse())


  useEffect(() => {
    if (document.cookie && document.cookie !== '') {
      let cookieString: string = document.cookie
      let cookies: string[] = cookieString.split(";")
      for (let index = 0; index < cookies.length; index++) {
        const element = cookies[index].trim();

        if (element.substring(0, 10) == ("csrftoken=")) {
          csrfToken = element.slice(10,element.length);
        }
      }
    }
  }, [])

  useEffect(() => {
    async function CalculateValues() {
      let requestOptions:RequestInit = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrfToken,
        },
        credentials: 'same-origin',
        mode: 'cors',
        body: JSON.stringify({
          principal: principal,
          interest_rate: interestRate
        })
      }
      
      let result = await fetch('http://localhost:8000/calculations/api', requestOptions)
      console.log(result);
    }

    CalculateValues()
  }, [principal, interestRate])

  return (
    <div className="App">
      <h1>Compound Interest Calculator</h1>
      <p>Please input your initial principal amount and select your annual interest rate</p>
      <label>Principal</label>
      <input type="number" value={principal} onChange={(e) => setPrincipal(parseInt(e.target.value))} />
      <br />
      <label>Interest Rate</label>
      <input type="number" value={interestRate} onChange={(e) => setInterestRate(parseInt(e.target.value))} />
      <br />
      <h2>1 Year Amount: £{amountValues.one_year.toFixed(2)}</h2>
      <h2>5 Year Amount: £{amountValues.five_year.toFixed(2)}</h2>
      <h2>10 Year Amount: £{amountValues.ten_year.toFixed(2)}</h2>
      <h2>20 Year Amount: £{amountValues.twenty_year.toFixed(2)}</h2>
      <h2>50 Year Amount: £{amountValues.fifty_year.toFixed(2)}</h2>
    </div>
  )
}

export default App
