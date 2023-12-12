// example.test.ts

// Assuming you have a function that makes an API request
// import { fetchData, postData } from './api';
import axios from 'axios';
import { fetchData, postData } from '../../api/api';
import apiMock from '../../api/mock-api';

// Use the mock API before running tests
beforeAll(() => {
  // Start intercepting requests
  apiMock.onAny().reply(200, {}); // You can specify default responses for any request
});

// Your actual test cases
test('fetchData function makes a GET request', async () => {
  const result = await fetchData();
  // Perform assertions based on the mocked response
  expect(result.data).toEqual('Mocked data');
});

test('postData function makes a POST request', async () => {
  const result = await postData({ someData: 'test' });
  // Perform assertions based on the mocked response
  expect(result.message).toEqual('Data posted successfully');
});

test('fetchData handles 404 error', async () => {
  // Start intercepting requests for this specific test
  apiMock.onGet('/api/error').reply(404, {
    error: 'Not Found',
    message: 'Resource not found',
  });

  // Mock the Axios get method with the mock API
  try {
    await fetchData();
  } catch (error) {
    // Perform assertions based on the error
    if (axios.isAxiosError(error) && error.response) {
      expect(error.response.status).toEqual(404);
      expect(error.response.data.error).toEqual('Not Found');
      expect(error.response.data.message).toEqual('Resource not found');
    } else
      throw new Error('Error is not type AxiosError or response is undefined');
  } finally {
    apiMock.reset();
  }
});

test('postData handles 500 error', async () => {
  // Start intercepting requests for this specific test
  apiMock.onPost('/api/postData').reply(500, {
    error: 'Internal Server Error',
    message: 'Something went wrong on the server',
  });

  // Mock the Axios post method with the mock API
  try {
    await postData({ someData: 'test' });
  } catch (error) {
    // Perform assertions based on the error
    if (axios.isAxiosError(error) && error.response) {
      expect(error.response.status).toEqual(500);
      expect(error.response.data.error).toEqual('Internal Server Error');
      expect(error.response.data.message).toEqual('Something went wrong on the server');
    } else
      throw new Error('Error is not type AxiosError or response is undefined');
  } finally {
    apiMock.reset();
  }
});

// Clean up after all tests
afterAll(() => {
  apiMock.reset();
});
