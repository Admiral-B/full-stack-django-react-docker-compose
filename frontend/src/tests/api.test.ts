import * as API from '../api/Api';
import { IInterestResponse } from '../types/InterestResonse';

let csrfToken = '';

test('Can get CSRF token from API', async () => {
    const token:string = await API.getCsrfToken();
    csrfToken = token;
    expect(token).toBeTruthy();
});

test('Can get interest calculation data from API', async () => {
    const values:IInterestResponse = await API.CalculateValues(csrfToken, 500, 3);
    expect(values).toBeTruthy();
});