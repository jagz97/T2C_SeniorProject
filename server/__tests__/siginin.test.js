const { expect } = require('chai');
const sinon = require('sinon');
const request = require('supertest');
const app = require('../server.js'); 
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../app/models'); // Adjust the path accordingly

describe('Signin API', () => {
  // Stubbing the Users.findOne method to simulate the database response
  let findOneStub;

  beforeEach(() => {
    findOneStub = sinon.stub(db.users, 'findOne');
  });

  afterEach(() => {
    findOneStub.restore();
  });

  it('should sign in a user and return a token', async () => {
    const userMock = {
      id: 1,
      username: 'testuser',
      email: 'testuser@example.com',
      password: bcrypt.hashSync('password', 10), // Hash the password for comparison
      lastLoggedIn: null,
      save: sinon.stub(),
    };

    findOneStub.resolves(userMock); // Resolve with the mock user

    const response = await request(app)
      .post('/api/users/auth/signin')
      .send({
        email: 'testuser@example.com',
        password: 'password',
      });

    expect(response.status).to.equal(200);
    expect(response.body).to.have.property('accesstoken');
    expect(response.body).to.have.property('firsTimeLogin');
    expect(findOneStub.calledOnce).to.be.true;

    
  });

  it('should handle a case where the user is not found', async () => {
    findOneStub.resolves(null); 

    const response = await request(app)
      .post('/api/users/auth/signin')
      .send({
        email: 'nonexistent@example.com',
        password: 'password',
      });

    expect(response.status).to.equal(404);
    expect(response.body).to.have.property('message', 'User Not found.');
    expect(findOneStub.calledOnce).to.be.true;

    
  });

  it('should handle invalid passwords', async () => {
    const userMock = {
      id: 1,
      username: 'testuser',
      email: 'testuser@example.com',
      password: bcrypt.hashSync('password', 10), // Hash the password for comparison
      lastLoggedIn: null,
      save: sinon.stub(),
    };

    findOneStub.resolves(userMock); // Resolve with the mock user

    const response = await request(app)
      .post('/api/users/auth/signin')
      .send({
        email: 'testuser@example.com',
        password: 'wrongpassword',
      });

    expect(response.status).to.equal(401);
    expect(response.body).to.have.property('message', 'Invalid Password!');
    expect(findOneStub.calledOnce).to.be.true;

    
  });

  it('should handle internal server errors', async () => {
    findOneStub.rejects(new Error('Database error')); // Simulate a database error

    const response = await request(app)
      .post('/api/users/auth/signin')
      .send({
        email: 'testuser@example.com',
        password: 'password',
      });

    expect(response.status).to.equal(500);
    expect(response.body).to.have.property('message', 'Database error');
    expect(findOneStub.calledOnce).to.be.true;

    
  });
});
