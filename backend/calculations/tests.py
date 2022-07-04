from django.test import TestCase, Client
import json

client = Client()
# Create your tests here.
response = client.get('/calculations/csrf/')
csrf_token = response.json()['csrfToken']

class CalculationEndPointTests(TestCase):
    def test_can_get_csrf_token(self):
        response = client.get('/calculations/csrf/')
        token = response.json()['csrfToken']
        self.assertEqual(response.status_code, 200)
        self.assertTrue(token)

    def test_GET_request_invalid(self):
        response = client.get('/calculations/api/')
        self.assertEqual(response.status_code, 404)

    # def test_POST_request_valid(self):
    #     response = client.post('/calculations/api/', {
    #         'principal': 500,
    #         'interest_rate': 3
    #     })
    #     self.assertEqual(response.status_code, 200)
