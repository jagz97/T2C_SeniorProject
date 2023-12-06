const db = require("../models");
const Image = db.image;
const fs = require("fs");
const Experience = db.experience;


exports.createExperience = async function (req, res) {

  try {

    // Check if the user is authenticated based on the presence of the JWT token
    const id = req.id; // Extract user information from the request context (provided by the middleware)k
    const user = await db.users.findByPk(id);


    
    if (!user) {
      return res.status(404).send({ message: "User not found." });
    }
      

    if (req.files['experiencePic'] == undefined) {
            return res.status(400).json({ error: "Please upload picture for experience" });
    }

    const file = req.files['experiencePic'];
    console.log(file);
    
    const filenameArray = file.map(file => file.filename);
    const fileTypeArray = file.map(file => file.mimetype);
    
    const filenames = filenameArray.join(', '); // Join the filenames into a single string
    const fileTypes = fileTypeArray.join(', '); // Join the file types into a single string
    
    console.log(filenames);
    console.log(fileTypes);


    const image = await Image.create({
        type: fileTypes,
        name: filenames,
        data: fs.readFileSync(
            __basedir + "/resources/static/assets/uploads/" + filenames
        ),
    });

    

    // Get the current date
    
    
    const starRating = req.body['starRating'];
    const description = req.body['description'];
    const  city_country = req.body['city_country'];
    const hotelName = req.body['hotelName']; 
    const restaurantName = req.body['restaurantName']; 
    const restaurantCuisine = req.body['restaurantCuisine']
    const hotelLocation = req.body['hotelLocation']
    const hotelRatings = req.body['hotelRatings']
    const restaurantLocation = req.body['restaurantLocation']
    const restaurantRatings = req.body['restaurantRatings'];
    const attractionName = req.body['attractionName'];
    const attractionLocation = req.body['attractionLocation'];
    const attractionDescription = req.body['attractionDescription'];
    const attractionRatings = req.body['attractionRatings'];


    
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
        experiencePicId: image.id,

    });

    res.status(200).json(newExperience);
  } catch (error) {
    console.error('Error creating Experience:', error);
    res.status(500).json({ error: 'Could not create Experience' });
  }


};


exports.getExperience = async function (req, res) {
    const userId = req.id;

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
            {model: db.image, as: 'experiencePic' },
          ],
        },
      ],
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Access the user's experiences, including associated hotels, attractions, and restaurants
    const userExperiences = user.experiences;

     // Convert the postPic data to base64 before sending the response
     userExperiences.forEach(experience => {
      if (experience.experiencePic && Buffer.isBuffer(experience.experiencePic.data)) {
        experience.experiencePic.data = experience.experiencePic.data.toString('base64');
      }
    });

    return res.status(200).json({userExperiences: userExperiences});
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }

    
};


exports.getExperienceById = async function (req, res) {
  const userId = req.id;
  const experienceId = req.params.experienceId; // Assuming the experience ID is provided in the request parameters

  try {
    // Find the user by their ID and include the specified experience with associated hotels, attractions, and restaurants
    const user = await db.users.findByPk(userId, {
      include: [
        {
          model: db.experience,
          as: 'experiences',
          include: [
            { model: db.hotel, as: 'hotel' },
            { model: db.attraction, as: 'attraction' },
            { model: db.restaurant, as: 'restaurant' },
            { model: db.image, as: 'experiencePic' },
          ],
          where: { id: experienceId }, // Filter by the specified experience ID
        },
      ],
    });

    if (!user || !user.experiences || user.experiences.length === 0) {
      return res.status(404).json({ message: 'Experience not found' });
    }

    // Access the specified experience, including associated hotels, attractions, and restaurants
    const specificExperience = user.experiences[0]; // Assuming there is only one experience with the given ID

    // Convert the experiencePic data to base64 before sending the response
    if (specificExperience.experiencePic && Buffer.isBuffer(specificExperience.experiencePic.data)) {
      specificExperience.experiencePic.data = specificExperience.experiencePic.data.toString('base64');
    }

    return res.status(200).json({ specificExperience });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};








