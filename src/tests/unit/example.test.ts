// example.test.ts

// Assuming you have a function that makes an API request
// import { fetchData, postData } from './api';
import apiMock from '../../api/mock-api';
import { fetchData, postData } from '../../api/api';

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

// Clean up after all tests
afterAll(() => {
  apiMock.reset();
});
