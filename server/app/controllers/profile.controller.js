const db = require("../models");
const Profile = db.profile
const Image = db.image;
const fs = require("fs");


/*
    ************************************************************
    ********************CREATE USER PROFILE*********************
    ************************************************************
 * Controller function to retrieve a user's profile including their profile picture.
 * This function checks if the user is authenticated based on the presence of a JWT token
 * and then fetches the user's profile and associated profile picture from the database.
*/

exports.createProfile = async (req, res) => {
    try {
      // Check if the user is authenticated based on the presence of the JWT token
      const id = req.id; // Extract user information from the request context (provided by the middleware)
      const user = await db.users.findByPk(id);

  
      if (!user) {
        return res.status(404).send({message: "User not found."});
      }

      const profileData = {
        userId: id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        gender: req.body.gender,
        bio: req.body.bio,
      };
  
      // Update the existing profile or create a new one
      let profile = await Profile.findOne({ where: { id: id } });
  
      if (!profile) {
        // If no profile exists, create a new one
        profile = await Profile.create(profileData);
        return res.status(200).send({ message: "Profile created sucessfully." })
      }
  
      // Update the profile data
      await profile.update(profileData);
  
      return res.status(200).send({ message: "Profile updated sucessfully." });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };


  /*
    ************************************************************
    ********************GET USER PROFILE************************
    ************************************************************
  */

    
    exports.getUserProfile = async (req, res) => {
      try {
        // Check if the user is authenticated based on the presence of the JWT token
        let userId = req.params.userId; // Replace 'userId' with the actual parameter name

        // If userId is not present in params, check if the user is authenticated based on the presence of the JWT token
        if (!userId) {
          userId = req.id;
        }

    
        // Check if the user exists
        const user = await db.users.findByPk(userId);
        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }
    
        // Retrieve the user's profile by userId, including the associated profile picture
        const userProfile = await db.profile.findOne({
          where: { userId },
          include: [
            {
              model: db.image, // Assuming this is the Image model
              as: 'profilePicture', // Use the alias defined in your association
            },
            {
              model: db.image, // Assuming this is the Image model
              as: 'bioPic', // Use the alias defined in your association
            },
          ],
        });
    
        if (!userProfile) {
          return res.status(404).json({ message: "Profile not found for this user" });
        }
        // Convert the profilePicture data to base64
        if (userProfile.profilePicture && userProfile.profilePicture.data) {
          const imageData = Buffer.from(userProfile.profilePicture.data);
          const base64Image = imageData.toString('base64');
          userProfile.profilePicture.data = base64Image;
        }

        // Convert the profilePicture data to base64
        if (userProfile.bioPic && userProfile.bioPic.data) {
          const imageData = Buffer.from(userProfile.bioPic.data);
          const base64Image = imageData.toString('base64');
          userProfile.bioPic.data = base64Image;
        }
    
        res.status(200).json(userProfile);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
      }
  };
  
/*
    ************************************************************
    ********************UPATE PROFILE PICTURE*******************
    ************************************************************
*/
exports.updateProfilePicture = async (req, res) => {
  try {
    console.log(req.file);

    if (req.file == undefined) {
      return res.status(400).json({ error: "You must select a file." });
    }

    // Create the image record
    const image = await Image.create({
      type: req.file.mimetype,
      name: req.file.originalname,
      data: fs.readFileSync(
        __basedir + "/resources/static/assets/uploads/" + req.file.filename
      ),
    });

    // Assuming you have the user's ID available (e.g., from a user session or request body)
    const userId = req.id; // Replace with the actual way you get the user's ID

    // Find the user's profile and update the profilePictureId
    const profile = await Profile.findOne({
      where: { userId },
    });

    const user = await db.users.findOne({
        where: {userId: userId },
    });
    if(!user) {
      return res.status(404).json("User profile not found.");
    }

    if (!profile) {
      return res.status(404).json("User profile not found.");
    }

    // Update the profilePictureId with the ID of the newly created image
    profile.profilePictureId = image.id;
    user.profilePictureId =image.id;
    // Save the updated profile
    await profile.save();
    await user.save();

    return res.status(200).send({ message: "File has been uploaded and associated with the user's profile picture." });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error when trying to upload images" });
   
  }
};


/*
    ************************************************************
    ********************GET PROFILE PICTURE*******************
    ************************************************************
*/
exports.getProfilePic = async (req, res) => {
  try {

    const userId = req.id; 

    // Fetch the user's profile along with the associated profile picture
    const profile = await Profile.findOne({
      where: { userId },
      include: [
        {
          model: Image,
          as: 'profilePicture',
        },
      ],
    });

    if (!profile) {
      return res.status(404).json({ message: 'User profile not found.' });
    }

    // Access the profile picture data
    const profilePicture = profile.profilePicture;

    if (profilePicture) {
      // Send the image data as a response
      res.contentType(profilePicture.type);
      res.send(profilePicture.data);
    } else {
      return res.status(404).json({ message: 'Profile picture not found.' });
    }
  } catch (error) {
    console.error('Error retrieving user profile picture:', error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};






/*
    ************************************************************
    ********************UPATE BIO PIC*******************
    ************************************************************
*/
exports.updateBioPic = async (req, res) => {
  try {
    console.log(req.file);

    if (req.file == undefined) {
      return res.status(400).json({ error: "You must select a file." });
    }

    // Create the image record
    const image = await Image.create({
      type: req.file.mimetype,
      name: req.file.originalname,
      data: fs.readFileSync(
        __basedir + "/resources/static/assets/uploads/" + req.file.filename
      ),
    });

    // Assuming you have the user's ID available (e.g., from a user session or request body)
    const userId = req.id; // Replace with the actual way you get the user's ID

    // Find the user's profile and update the profilePictureId
    const profile = await Profile.findOne({
      where: { userId },
    });

    if (!profile) {
      return res.status(404).json({ error: 'User profile not found.' });
    }

    // Update the profilePictureId with the ID of the newly created image
    profile.bioPicId = image.id;

    // Save the updated profile
    await profile.save();

    return res.status(200).json({ message: 'File has been uploaded and associated with the user\'s profile picture.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: `Error when trying to upload images: ${error.message}` });
  }
};



/*
    **************************************************
    ********************GET BIO PIC*******************
    **************************************************
*/
exports.getBioPic = async (req, res) => {
  try {

    const userId = req.id; 

    // Fetch the user's profile along with the associated profile picture
    const profile = await Profile.findOne({
      where: { userId },
      include: [
        {
          model: Image,
          as: 'bioPic',
        },
      ],
    });

    if (!profile) {
      return res.status(404).json({ message: 'User Profile not found.' });
    }

    // Access the profile picture data
    const bioPic = profile.bioPic;

    if (bioPic) {
      // Send the image data as a response
      res.contentType(bioPic.type);
      res.send(bioPic.data);
    } else {
      return res.status(404).json({ message: 'Bio picture not found.' });
    }
  } catch (error) {
    console.error('Error retrieving user Bio picture:', error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};




exports.addBio = async (req, res) => {


  try {
    // Check if the user is authenticated based on the presence of the JWT token
    const id = req.id; // Extract user information from the request context (provided by the middleware)
    const user = await db.users.findByPk(id);


    if (!user) {
      return res.status(404).send({message: "User not found."});
    }

    const profileData = {
      userId: id,
      bio: req.body.bio,
    };

    // Update the existing profile or create a new one
    let profile = await Profile.findOne({ where: { id: id } });

    if (!profile) {
      // If no profile exists, create a new one
      profile = await Profile.create(profileData);
      return res.status(200).send({ message: "Bio created sucessfully." })
    }

    // Update the profile data
    await profile.update(profileData);

    return res.status(200).send({ message: "Bio updated sucessfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};


exports.getBio = async (req, res) => {
  try {

    const userId = req.id; 

    // Fetch the user's profile along with the associated profile picture
    const profile = await Profile.findOne({ where: { id: id } });

    if (!profile) {
      return res.status(404).json({ message: 'User Profile not found.' });
    }

    // Access the profile picture data
    const bio = profile.bio;

    if (bio) {
      return res.status(200).send(bio);
    } else {
      return res.status(404).json({ message: 'Bio picture not found.' });
    }
  } catch (error) {
    console.error('Error retrieving user Bio picture:', error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};