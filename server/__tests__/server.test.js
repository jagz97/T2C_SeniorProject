const { expect } = require('chai');
const request = require('supertest');
const app = require('../server.js');


describe('Server setup', () => {
  it('should start the server and log the port number', async () => {
    const res = await request(app).get('/');
    expect(res.status).to.equal(200);
  });
});





