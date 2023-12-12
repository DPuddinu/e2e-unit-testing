// apiMock.ts

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

// Mock a GET request
mock.onGet('/api/data').reply(200, {
  data: 'Mocked data',
});

// Mock a POST request
mock.onPost('/api/postData').reply(201, {
  message: 'Data posted successfully',
});

export default mock;
