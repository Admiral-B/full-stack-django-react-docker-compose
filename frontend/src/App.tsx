import { useState, useEffect } from 'react'
import {
  AnimatedAxis,
  AnimatedGrid,
  AnimatedAreaSeries,
  XYChart,
} from '@visx/xychart'
import * as curves from '@visx/curve'
import './App.css'

import { IChartValue } from './types/ChartValue'
import { IInterestResponse, InterestResponse } from './types/InterestResonse'

import { getCsrfToken, CalculateValues } from './api/Api'

let csrfToken: string = ''

const accessors = {
  xAccessor: (d: IChartValue) => d.Year,
  yAccessor: (d: IChartValue) => d.Amount
}

const formatCurrency = (amount: number) => {
  return amount.toLocaleString('en-gb', {
    style: 'currency',
    currency: 'GBP'
  });
}

const App = () => {
  const [principal, setPrincipal] = useState(500)
  const [monthly, setMonthly] = useState(500)
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
    if (csrfToken !== '') {
      CalculateValues(csrfToken, principal, interestRate, monthly)
        .then((resp: IInterestResponse) => setAmountValues(resp))
    }
  }, [principal, interestRate, monthly])

  return (
    <div className="App">
      <h1>Compound Interest Calculator</h1>
      <p>Please input your initial principal amount, monthly deposit and select your interest rate</p>
      <div className='sliders-section'>
        <div className='slider-section'>
          <label>Principal</label>
          <div className="amount">£{principal}</div>
          <input
            type="range"
            min={100}
            max={5000}
            value={principal}
            onChange={(e) => setPrincipal(parseInt(e.target.value))} />
        </div>
        <div className='slider-section'>
          <label>Monthly Deposit</label>
          <div className="amount">£{monthly}</div>
          <input
            type="range"
            min={100}
            max={5000}
            value={monthly}
            onChange={(e) => setMonthly(parseInt(e.target.value))} />
        </div>
        <div className='slider-section'>
          <label>Interest Rate</label>
          <div className="amount">{interestRate}%</div>
          <input
            type="range"
            min={1}
            max={15.0}
            value={interestRate}
            onChange={(e) => setInterestRate(parseInt(e.target.value))} />
        </div>
      </div>
      <br />
      <XYChart
        height={400}
        width={800}
        xScale={{ type: 'band' }}
        yScale={{ type: 'linear' }}
      >
        <AnimatedAxis label='Years' orientation='bottom' />
        <AnimatedAxis orientation='left'/>
        <AnimatedGrid rows columns numTicks={8} />
        <AnimatedAreaSeries curve={curves.curveCardinal} fillOpacity={.6} dataKey={(interestRate + 2).toString() + "% Interest"} data={amountValues.plus_two_series} {...accessors} />
        <AnimatedAreaSeries curve={curves.curveCardinal} fillOpacity={.6} dataKey={(interestRate + 1).toString() + "% Interest"} data={amountValues.plus_one_series} {...accessors} />
        <AnimatedAreaSeries curve={curves.curveCardinal} fillOpacity={.6} dataKey={interestRate.toString() + "% Interest"} data={amountValues.main_series} {...accessors} />
      </XYChart>
      <div className='grid'>
        <div style={{ gridArea: 'interest-rate' }}>
          <h2>Interest Rate</h2>
        </div>
        <div style={{ gridArea: 'year-1' }}>
          <h2>Year 1</h2>
        </div>
        <div style={{ gridArea: 'year-2' }}>
          <h2>Year 2</h2>
        </div>
        <div style={{ gridArea: 'year-5' }}>
          <h2>Year 5</h2>
        </div>
        <div style={{ gridArea: 'year-10' }}>
          <h2>Year 10</h2>
        </div>
        <div style={{ gridArea: 'year-20' }}>
          <h2>Year 20</h2>
        </div>
        <div style={{ gridArea: 'year-50' }}>
          <h2>Year 50</h2>
        </div>
        <div style={{ gridArea: 'main-rate' }}>
          <h3>{interestRate}%</h3>
        </div>
        <div style={{ gridArea: 'mr-1' }}>
          <h3>{formatCurrency(amountValues.main_series[1].Amount)}</h3>
        </div>
        <div style={{ gridArea: 'mr-2' }}>
          <h3>{formatCurrency(amountValues.main_series[2].Amount)}</h3>
        </div>
        <div style={{ gridArea: 'mr-5' }}>
          <h3>{formatCurrency(amountValues.main_series[5].Amount)}</h3>
        </div>
        <div style={{ gridArea: 'mr-10' }}>
          <h3>{formatCurrency(amountValues.main_series[10].Amount)}</h3>
        </div>
        <div style={{ gridArea: 'mr-20' }}>
          <h3>{formatCurrency(amountValues.main_series[20].Amount)}</h3>
        </div>
        <div style={{ gridArea: 'mr-50' }}>
          <h3>{formatCurrency(amountValues.main_series[50].Amount)}</h3>
        </div>
        <div style={{ gridArea: 'plus-1-rate' }}>
          <h3>{interestRate + 1}%</h3>
        </div>
        <div style={{ gridArea: 'p1-1' }}>
          <h3>{formatCurrency(amountValues.plus_one_series[1].Amount)}</h3>
        </div>
        <div style={{ gridArea: 'p1-2' }}>
          <h3>{formatCurrency(amountValues.plus_one_series[2].Amount)}</h3>
        </div>
        <div style={{ gridArea: 'p1-5' }}>
          <h3>{formatCurrency(amountValues.plus_one_series[5].Amount)}</h3>
        </div>
        <div style={{ gridArea: 'p1-10' }}>
          <h3>{formatCurrency(amountValues.plus_one_series[10].Amount)}</h3>
        </div>
        <div style={{ gridArea: 'p1-20' }}>
          <h3>{formatCurrency(amountValues.plus_one_series[20].Amount)}</h3>
        </div>
        <div style={{ gridArea: 'p1-50' }}>
          <h3>{formatCurrency(amountValues.plus_one_series[50].Amount)}</h3>
        </div>
        <div style={{ gridArea: 'plus-2-rate' }}>
          <h3>{interestRate + 2}%</h3>
        </div>
        <div style={{ gridArea: 'p2-1' }}>
          <h3>{formatCurrency(amountValues.plus_two_series[1].Amount)}</h3>
        </div>
        <div style={{ gridArea: 'p2-2' }}>
          <h3>{formatCurrency(amountValues.plus_two_series[2].Amount)}</h3>
        </div>
        <div style={{ gridArea: 'p2-5' }}>
          <h3>{formatCurrency(amountValues.plus_two_series[5].Amount)}</h3>
        </div>
        <div style={{ gridArea: 'p2-10' }}>
          <h3>{formatCurrency(amountValues.plus_two_series[10].Amount)}</h3>
        </div>
        <div style={{ gridArea: 'p2-20' }}>
          <h3>{formatCurrency(amountValues.plus_two_series[20].Amount)}</h3>
        </div>
        <div style={{ gridArea: 'p2-50' }}>
          <h3>{formatCurrency(amountValues.plus_two_series[50].Amount)}</h3>
        </div>
      </div>
    </div>
  )
}

export default App
