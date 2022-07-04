import { useState, useEffect } from 'react'
import {
  AnimatedAxis,
  AnimatedGrid,
  AnimatedLineSeries,
  AnimatedAreaSeries,
  XYChart,
  Tooltip,
} from '@visx/xychart'
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
      <div className='interest-timeline'>
        <XYChart height={500} width={800} xScale={{ type: 'band' }} yScale={{ type: 'linear' }}>
          <AnimatedAxis orientation='bottom' />
          <AnimatedGrid columns numTicks={4} />
          <AnimatedAreaSeries dataKey='Line 3' data={amountValues.plus_two_series} {...accessors} />
          <AnimatedAreaSeries dataKey='Line 2' data={amountValues.plus_one_series} {...accessors} />
          <AnimatedAreaSeries dataKey='Line 1' data={amountValues.main_series} {...accessors} />
          <Tooltip
            snapTooltipToDatumX
            snapTooltipToDatumY
            showVerticalCrosshair
            showSeriesGlyphs
            renderTooltip={({ tooltipData, colorScale }) => (
              <div>
                <div style={{ color: colorScale(tooltipData?.nearestDatum.key) }}>
                  {tooltipData?.nearestDatum.key}
                </div>
                <div>
                  {accessors.xAccessor(tooltipData?.nearestDatum.datum)}
                </div>
                <div>
                  {accessors.yAccessor(tooltipData?.nearestDatum.datum)}
                </div>
              </div>
            )}
          />
        </XYChart>
      </div>
    </div>
  )
}

export default App
