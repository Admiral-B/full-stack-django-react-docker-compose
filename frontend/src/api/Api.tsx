
import { IInterestResponse } from "../types/InterestResonse";

const API = 'http://localhost:8000'

export const getCsrfToken = async () => {
  const resp = await fetch(`${API}/calculations/csrf/`, {
    credentials: 'include',
  })

  const data = await resp.json()
  return data.csrfToken
}

export const CalculateValues = async (csrfToken: string, principal: number, interestRate: number) => {
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

  let data = await fetch(`${API}/calculations/api/`, requestOptions)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      let obj = json as IInterestResponse
      return obj;
    });

  return data
}