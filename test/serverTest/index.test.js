var request = require("supertest");
const app = require("../../server/index.js");

describe('Test the root path', () => {
    test('It should response the GET method', (done) => {
        request(app).get('/').then((response) => {
            expect(response.status).toBe(200);
            done();
        });
    });
});