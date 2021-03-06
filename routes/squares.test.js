const request = require('supertest');
const app    = require('../app');


test('GET /?string=somestring should return 200', async () => {
    var prova = 'ciao'
    const response = await request(app).get('/square?string=' + prova);
    expect(response.statusCode).toBe(200);
    expect(response.body.result).toBe(16)
});
