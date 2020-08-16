const StatelessClient = require('../index');

jest.mock('../api');
const ApiClient = require('../api');

test("Basic test", async () => {
  expect(true).toBe(true)
})

test("Gets initial value on first load", async () => {
  const client = new StatelessClient('foo', 'bar');
  const resp = {'state': {'id': '1', 'projectId': 'foo', 'data': {'foo': 'bar'}}};
  ApiClient.mock.instances[0].getValue.mockResolvedValue(resp)
  expect(client).not.toBe(false)
  const currentValue = await client.getValue('foo');
  expect(currentValue).toEqual('bar')
})
