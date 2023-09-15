const chai = require('chai');
const expect = chai.expect;

const { sequelize } = require('../../models/index'); 

const User = require('../models/users.models');
const Photo = require('../models/photos.models');

describe('Associations between User and Photo models', () => {
  before(async () => {
    // Sync the database to create tables
    await sequelize.sync({ force: true });
  });

  it('should associate User and Photo models', async () => {
    // Create a User
    const user = await User.create({
      firstName: 'John',
      lastName: 'Doe',
      username: 'test',
      email: 'test@example.com',
      password: 'test_password'

      // Add other user attributes as needed
    });

    // Create a Photo associated with the user
    const photo = await Photo.create({
      imageUrl: 'https://example.com/image.jpg',
      location: 'New York',
      userId: user.id, // Associate the photo with the user
    });

    // Retrieve the user with associated photos
    const userWithPhotos = await User.findByPk(user.id, {
      include: [{ model: Photo }],
    });

    // Check if the association is correct
    expect(userWithPhotos).to.exist;
    expect(userWithPhotos.photos).to.be.an('array');
    expect(userWithPhotos.photos).to.have.lengthOf(1);
    expect(userWithPhotos.photos[0].imageUrl).to.equal('https://example.com/image.jpg');
  });
  
  // Add more test cases as needed

  after(async () => {
    // Clean up and close the database connection
    await sequelize.close();
  });
});
