const db = require("../models")


exports.createExperience = async function (req, res) {

  try {

    // Check if the user is authenticated based on the presence of the JWT token
    const id = req.id; // Extract user information from the request context (provided by the middleware)
    const user = await db.users.findByPk(id);

    if (!user) {
        return res.status(404).send({ message: "User not found." });
    }

    const {
      description,
      city_country,
      starRating,
      hotelName, 
      restaurantName, 
      restaurantCuisine,
      hotelLocation,
      hotelRatings, 
      restaurantLocation,
      restaurantRatings,
      attractionName,
      attractionLocation,
      attractionDescription,
      attractionRatings

    } = req.body;

    
    let hotels = await db.hotel.findOne({ where: { name: hotelName } });
    if (!hotels) {
      hotels = await db.hotel.create(
        { 
            name: hotelName, 
            location: hotelLocation, 
            rating: hotelRatings 
        });
    }

    
    let restaurants = await db.restaurant.findOne({ where: { name: restaurantName } });
    if (!restaurants) {
      restaurants = await db.restaurant.create(
        {   name: restaurantName, 
            location: restaurantLocation,
            cuisine: restaurantCuisine,
            rating: restaurantRatings 
        });
    }

    let attractions = await db.attraction.findOne({ where: { name: attractionName } });
    if (!attractions) {
      attractions = await db.attraction.create(
        {   name: attractionName, 
            location: attractionLocation, 
            description: attractionDescription, 
            rating: attractionRatings 
        });
    }

    
    const newExperience = await db.experience.create({
    
        userId: id,
        description,
        city_country,
        starRating,
        hotelId: hotels.id,
        restaurantId: restaurants.id,
        attractionId: attractions.id,
    });

    res.status(200).json(newExperience);
  } catch (error) {
    console.error('Error creating Experience:', error);
    res.status(500).json({ error: 'Could not create Experience' });
  }


};


exports.getExperience = async function (req, res) {
    const userId = '1';

  try {
    // Find the user by their ID and include their experiences and associated hotels, attractions, and restaurants
    const user = await db.users.findByPk(userId, {
      include: [
        {
          model: db.experience,
          as: 'experiences',
          include: [
            { model: db.hotel, as: 'hotel' },
            { model: db.attraction, as: 'attraction' },
            { model: db.restaurant, as: 'restaurant' },
          ],
        },
      ],
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Access the user's experiences, including associated hotels, attractions, and restaurants
    const userExperiences = user.experiences;

    return res.status(200).json({userExperiences: userExperiences});
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }

    
};







