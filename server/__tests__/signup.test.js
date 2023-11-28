const { expect } = require('chai');
const app  = require('../server.js'); // Import your Express app and Sequelize instance
const db = require('../app/models'); 
const Users = db.users;
const sinon = require('sinon');
const request = require('supertest');





describe('Registration API', () => {
   



  it('should register a new user', async () => {
    const userData = {
      username: 'testuser',
      email: 'testuser@example.com',
      password: 'testpassword',
      
    };
    

    const response = await request(app)
      .post('/api/users/auth/signup')
      .send(userData);

      


    // Check if the user is saved in the database
    const user = await Users.findOne({
      where: { email: userData.email }
    });

    expect(user.username).to.equal(userData.username);
    expect(user.email).to.equal(userData.email);
  });

  it('should return an error if email or password is not provided', async () => {
    const response = await request(app)
      .post('/api/users/auth/signup')
      .send({});
      expect(response.status).to.equal(500);
    
  });

  it('should return an error if the user already exists', async () => {
    const existingUser = {
      username: 'existinguser',
      email: 'existinguser@example.com',
      password: 'existingpassword'
    };

    await Users.create(existingUser);

    const response = await request(app)
      .post('/api/users/auth/signup')
      .send(existingUser);

    expect(response.status).to.equal(400);
   

   

    
  });
});


