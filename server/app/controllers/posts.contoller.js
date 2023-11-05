const {posts, image, users} = require("../models");
const Posts = posts;
const Image = image;
const fs = require("fs");
const User  = users;



exports.post = async function (req, res) {
    try {
        // Check if the user is authenticated based on the presence of the JWT token
        const id = req.id; // Extract user information from the request context (provided by the middleware)
        const user = await users.findByPk(id);

        console.log('Uploaded File:', req.files['bioPic']);
        console.log('Value for key1:', req.body['caption']);
        console.log('Value for key2:', req.body['country']);
        console.log('Value for key3:', req.body.caption);

        if (!user) {
            return res.status(404).send({ message: "User not found." });
        }

        if (req.files['bioPic'] == undefined) {
            return res.status(400).json({ error: "Please upload pictures for post" });
        }

        const file = req.files['bioPic'];
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
        const currentDate = new Date();
        const caption  = req.body['caption'];
        const country = req.body['country'];
        const city = req.body['city'];
        const postData = {
            userId: id,
            caption: caption,
            country: country,
            city: city,
            postPicId: image.id,
            date: currentDate, // Add the current date to the post data
        };

        // If no profile exists, create a new one
        const post = await Posts.create(postData);
        console.log(post);
        return res.status(200).send({ message: "Post created successfully." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};





exports.getPostsByUserId = async function (req, res) {
    try {
        const userId = req.id; // Extract user information from the request context (provided by the middleware)

            // Fetch user's posts and include related images
    const userPosts = await User.findByPk(userId, {
        include: [
          {
            model: Posts,
            include: [
              {
                model: Image,
                as: 'postPic',
              },
            ],
          },
        ],
        order:[
          [Posts,'date', 'DESC'],
        ]
      });

      
  
      if (!userPosts) {
        return res.status(404).json({ message: 'User not found' });
      }

     // Convert the postPic data to base64 before sending the response
    userPosts.Posts.forEach(post => {
      if (post.postPic && Buffer.isBuffer(post.postPic.data)) {
        post.postPic.data = post.postPic.data.toString('base64');
      }
    });

     

          
            // Send the array of Base64-encoded image data in the response
            res.status(200).json({ posts: userPosts.Posts });
  
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
};
