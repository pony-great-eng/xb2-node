import { text } from 'body-parser';
import request from 'supertest';
import app from '../app';
import {connection} from './database/mysql';

/**
 * 测试接口
 */
describe('演示接口测试', () => {
    afterAll(async () => {
        //断开数据服务连接
        connection.end();
    });

    test('测试 GET /', async () => {
        //请求接口
        const response = await request(app).get('/');

        //做出断言
        expect(response.status).toBe(200);
        expect(response.body).toEqual({title: '小白兔的开发之路'});
    })

    test('测试 POST /echo', async () => {
        //请求接口
        const response = await request(app)
        .post('/echo')
        .send({message:'你好 ~'});

        //做出断言
        expect(response.status).toBe(201);
        expect(response.body).toEqual({message: '你好 ~'});
    })
})