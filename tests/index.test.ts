import { default as Helper } from '../lib'
import 'mocha';

describe('获取案例', async function () {
    it('用例1', async function () {
      const token = await Helper('cff1558100f8864198cf119b779bbb90', {
        "type":"jsbridge",
        "subType": "RPC",
        "matching":"dfdfg",
        "pid":"582b0cf0",
        "sid": "c1bd2670"
      });
      console.log('token', token);
    });
})
