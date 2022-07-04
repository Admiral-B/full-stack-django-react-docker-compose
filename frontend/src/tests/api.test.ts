import * as API from '../api/Api';

let csrfToken = '';

test('Can get CSRF token from API', () => {
    return API.getCsrfToken().then((token) => {
        csrfToken = token
        expect(token).toBeTruthy()
    })
});

test('Can get interest calculation data from API', () => {
    return API.CalculateValues(csrfToken, 500, 3).then((values) => {
        expect(values).toBeTruthy()
    })
});