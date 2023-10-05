const db = require("../models");
const Profile = db.profile







exports.createProfile = async (req, res) => {
    try {
      // Check if the user is authenticated based on the presence of the JWT token
      const id = req.id; // Extract user information from the request context (provided by the middleware)
      const user = await db.users.findByPk(id);
  
      if (!user) {
        return res.status(404).send("User not found.");
      }
  
      // if (!req.files || Object.keys(req.files).length < 2) {
      //   return res.status(400).send("Select both a profile picture and a bio pic.");
      // }
  
      // const profilePicture = req.files.profilePicture[0];
      // const bioPic = req.files.bioPic[0];
  
      // Create profile data
      const profileData = {
        id: id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        gender: req.body.gender,
      };
  
      // Update the existing profile or create a new one
      let profile = await Profile.findOne({ where: { id: id } });
  
      if (!profile) {
        // If no profile exists, create a new one
        profile = await Profile.create(profileData);
        return res.status(200).send("Profile created successfully.")
      }
  
      // Update the profile data
      await profile.update(profileData);
  
      // Save the updated profile picture and bio pic to a specified location on the server
      // const profilePicturePath = path.join(
      //   __basedir + "/resources/static/assets/profile_pictures/",
      //   profilePicture.filename
      // );
      // const bioPicPath = path.join(
      //   __basedir + "/resources/static/assets/bio_pics/",
      //   bioPic.filename
      // );
  
      // fs.writeFileSync(profilePicturePath, profilePicture.buffer);
      // fs.writeFileSync(bioPicPath, bioPic.buffer);
  
      return res.status(200).send("Profile updated sucessfully.");
    } catch (error) {
      console.error(error);
      return res.status(500).send(`Error when trying to update profile: ${error}`);
    }
  };


exports.getUserProfile = async (req, res) => {
    try {
        // Check if the user is authenticated based on the presence of the JWT token
        const id = req.id; // Extract user information from the request context (provided by the middleware)
        
        // Check if the user exists
        const user = await db.users.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Retrieve the user's profile
        const userProfile = await Profile.findOne({ where: { id } });

        if (!userProfile) {
            return res.status(404).json({ message: "Profile not found for this user" });
        }

        res.status(200).json(userProfile);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

       



