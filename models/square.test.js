const request = require('supertest');
const square = require('./square');


test('string_square(int) should return -1', () => {
    var prova = 1
    const response = square.string_square(prova);
    expect(response).toBe(-1)
});

test('string_square(string) should return 16', () => {
    var prova = 'ciao'
    const response = square.string_square(prova);
    expect(response).toBe(16)
});

test('string_square(null) should return -1',() => {
    var prova = null
    const response = square.string_square(prova);
    expect(response).toBe(-1)
});
