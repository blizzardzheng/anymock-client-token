import { default as Helper } from '../lib'
import 'mocha';

describe('获取案例', async function () {
    it('用例1', async function () {
      const token = await Helper('6ee18138b57851686f03a7c598711031', { 
      type: 'jsbridge',
      subType: 'httprequest',
      matching: '/counterAdd',
      pid: '3846d050' 
    });
      console.log('token', token);
    });
})
