import { useState, useEffect } from 'react'
import {
  AnimatedAxis,
  AnimatedGrid,
  AnimatedAreaSeries,
  XYChart,
  Tooltip,
} from '@visx/xychart'
import * as curves from '@visx/curve'
import './App.css'

interface IChartValue {
  Year: number,
  Amount: number
}
interface IInterestResponse {
  main_series: IChartValue[],
  plus_one_series: IChartValue[],
  plus_two_series: IChartValue[]
}

class InterestResponse implements IInterestResponse {
  main_series: IChartValue[] = [
    {
      "Year": 0,
      "Amount": 500.00
    },
    {
      "Year": 1,
      "Amount": 515.00
    },
    {
      "Year": 2,
      "Amount": 530.45
    },
    {
      "Year": 3,
      "Amount": 546.36
    },
    {
      "Year": 4,
      "Amount": 562.75
    },
    {
      "Year": 5,
      "Amount": 579.64
    },
    {
      "Year": 6,
      "Amount": 597.03
    },
    {
      "Year": 7,
      "Amount": 614.94
    },
    {
      "Year": 8,
      "Amount": 633.39
    },
    {
      "Year": 9,
      "Amount": 652.39
    },
    {
      "Year": 10,
      "Amount": 671.96
    },
    {
      "Year": 11,
      "Amount": 692.12
    },
    {
      "Year": 12,
      "Amount": 712.88
    },
    {
      "Year": 13,
      "Amount": 734.27
    },
    {
      "Year": 14,
      "Amount": 756.29
    },
    {
      "Year": 15,
      "Amount": 778.98
    },
    {
      "Year": 16,
      "Amount": 802.35
    },
    {
      "Year": 17,
      "Amount": 826.42
    },
    {
      "Year": 18,
      "Amount": 851.22
    },
    {
      "Year": 19,
      "Amount": 876.75
    },
    {
      "Year": 20,
      "Amount": 903.06
    }
  ];
  plus_one_series: IChartValue[] = [
    {
      "Year": 0,
      "Amount": 500.00
    },
    {
      "Year": 1,
      "Amount": 520.00
    },
    {
      "Year": 2,
      "Amount": 540.80
    },
    {
      "Year": 3,
      "Amount": 562.43
    },
    {
      "Year": 4,
      "Amount": 584.93
    },
    {
      "Year": 5,
      "Amount": 608.33
    },
    {
      "Year": 6,
      "Amount": 632.66
    },
    {
      "Year": 7,
      "Amount": 657.97
    },
    {
      "Year": 8,
      "Amount": 684.28
    },
    {
      "Year": 9,
      "Amount": 711.66
    },
    {
      "Year": 10,
      "Amount": 740.12
    },
    {
      "Year": 11,
      "Amount": 769.73
    },
    {
      "Year": 12,
      "Amount": 800.52
    },
    {
      "Year": 13,
      "Amount": 832.54
    },
    {
      "Year": 14,
      "Amount": 865.84
    },
    {
      "Year": 15,
      "Amount": 900.47
    },
    {
      "Year": 16,
      "Amount": 936.49
    },
    {
      "Year": 17,
      "Amount": 973.95
    },
    {
      "Year": 18,
      "Amount": 1012.91
    },
    {
      "Year": 19,
      "Amount": 1053.42
    },
    {
      "Year": 20,
      "Amount": 1095.56
    }
  ];
  plus_two_series: IChartValue[] = [
    {
      "Year": 0,
      "Amount": 500.00
    },
    {
      "Year": 1,
      "Amount": 525.00
    },
    {
      "Year": 2,
      "Amount": 551.25
    },
    {
      "Year": 3,
      "Amount": 578.81
    },
    {
      "Year": 4,
      "Amount": 607.75
    },
    {
      "Year": 5,
      "Amount": 638.14
    },
    {
      "Year": 6,
      "Amount": 670.05
    },
    {
      "Year": 7,
      "Amount": 703.55
    },
    {
      "Year": 8,
      "Amount": 738.73
    },
    {
      "Year": 9,
      "Amount": 775.66
    },
    {
      "Year": 10,
      "Amount": 814.45
    },
    {
      "Year": 11,
      "Amount": 855.17
    },
    {
      "Year": 12,
      "Amount": 897.93
    },
    {
      "Year": 13,
      "Amount": 942.82
    },
    {
      "Year": 14,
      "Amount": 989.97
    },
    {
      "Year": 15,
      "Amount": 1039.46
    },
    {
      "Year": 16,
      "Amount": 1091.44
    },
    {
      "Year": 17,
      "Amount": 1146.01
    },
    {
      "Year": 18,
      "Amount": 1203.31
    },
    {
      "Year": 19,
      "Amount": 1263.48
    },
    {
      "Year": 20,
      "Amount": 1326.65
    }
  ]
}

const API = 'http://localhost:8000'

let csrfToken: string = ''

const accessors = {
  xAccessor: (d: IChartValue) => d.Year,
  yAccessor: (d: IChartValue) => d.Amount
}

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

  return (
    <div className="App">
      <h1>Compound Interest Calculator</h1>
      <p>Please input your initial principal amount and select your annual interest rate</p>
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
      <XYChart height={500} width={800} xScale={{ type: 'band' }} yScale={{ type: 'linear' }}>
        <AnimatedAxis label='Years' orientation='bottom' />
        <AnimatedAxis label='Amount / £' orientation='left' labelOffset={22} />
        <AnimatedGrid rows columns numTicks={8} />
        <AnimatedAreaSeries curve={curves.curveCardinal} fillOpacity={.4} dataKey={(interestRate + 2).toString() + "% Interest"} data={amountValues.plus_two_series} {...accessors} />
        <AnimatedAreaSeries curve={curves.curveCardinal} fillOpacity={.4} dataKey={(interestRate + 1).toString() + "% Interest"} data={amountValues.plus_one_series} {...accessors} />
        <AnimatedAreaSeries curve={curves.curveCardinal} fillOpacity={.4} dataKey={interestRate.toString() + "% Interest"} data={amountValues.main_series} {...accessors} />
        <Tooltip
          snapTooltipToDatumX
          snapTooltipToDatumY
          showVerticalCrosshair
          showSeriesGlyphs
          renderTooltip={({ tooltipData }) => {
            if (tooltipData !== undefined) {
              return (
                <div>
                  <div>
                    {tooltipData.nearestDatum.key}
                  </div>
                  <div>
                    Year: {accessors.xAccessor(tooltipData.nearestDatum.datum)}
                  </div>
                  <div>
                    £{accessors.yAccessor(tooltipData.nearestDatum.datum)}
                  </div>
                </div>
              )
            }
          }}
        />
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
        <div style={{ gridArea: 'main-rate' }}>
          <h3>{interestRate}%</h3>
        </div>
        <div style={{ gridArea: 'mr-1' }}>
          <h3>{amountValues.main_series[1].Amount}</h3>
        </div>
        <div style={{ gridArea: 'mr-2' }}>
          <h3>{amountValues.main_series[2].Amount}</h3>
        </div>
        <div style={{ gridArea: 'mr-5' }}>
          <h3>{amountValues.main_series[5].Amount}</h3>
        </div>
        <div style={{ gridArea: 'mr-10' }}>
          <h3>{amountValues.main_series[10].Amount}</h3>
        </div>
        <div style={{ gridArea: 'mr-20' }}>
          <h3>{amountValues.main_series[20].Amount}</h3>
        </div>
        <div style={{ gridArea: 'plus-1-rate' }}>
          <h3>{interestRate + 1}%</h3>
        </div>
        <div style={{ gridArea: 'p1-1' }}>
          <h3>{amountValues.plus_one_series[1].Amount}</h3>
        </div>
        <div style={{ gridArea: 'p1-2' }}>
          <h3>{amountValues.plus_one_series[2].Amount}</h3>
        </div>
        <div style={{ gridArea: 'p1-5' }}>
          <h3>{amountValues.plus_one_series[5].Amount}</h3>
        </div>
        <div style={{ gridArea: 'p1-10' }}>
          <h3>{amountValues.plus_one_series[10].Amount}</h3>
        </div>
        <div style={{ gridArea: 'p1-20' }}>
          <h3>{amountValues.plus_one_series[20].Amount}</h3>
        </div>
        <div style={{ gridArea: 'plus-2-rate' }}>
          <h3>{interestRate + 2}%</h3>
        </div>
        <div style={{ gridArea: 'p2-1' }}>
          <h3>{amountValues.plus_two_series[1].Amount}</h3>
        </div>
        <div style={{ gridArea: 'p2-2' }}>
          <h3>{amountValues.plus_two_series[2].Amount}</h3>
        </div>
        <div style={{ gridArea: 'p2-5' }}>
          <h3>{amountValues.plus_two_series[5].Amount}</h3>
        </div>
        <div style={{ gridArea: 'p2-10' }}>
          <h3>{amountValues.plus_two_series[10].Amount}</h3>
        </div>
        <div style={{ gridArea: 'p2-20' }}>
          <h3>{amountValues.plus_two_series[20].Amount}</h3>
        </div>
      </div>
    </div>
  )
}

export default App
