const {posts, image, users, likes, comments} = require("../models");
const Posts = posts;
const Image = image;
const fs = require("fs");
const User  = users;
const Likes = likes;
const Comments  = comments;




exports.post = async function (req, res) {
    try {
        // Check if the user is authenticated based on the presence of the JWT token
        const id = req.id; // Extract user information from the request context (provided by the middleware)
        const user = await users.findByPk(id);

        console.log('Uploaded File:', req.files['postPic']);
        console.log('Value for key1:', req.body['caption']);
        console.log('Value for key2:', req.body['country']);
        console.log('Value for key3:', req.body.caption);

        if (!user) {
            return res.status(404).send({ message: "User not found." });
        }

        if (req.files['postPic'] == undefined) {
            return res.status(400).json({ error: "Please upload pictures for post" });
        }

        const file = req.files['postPic'];
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



exports.createLike = async (req,res) => {
  try {
      const postId = req.params.postId;
      const userId = req.id; // You should obtain the user's ID from the request
  
      // Check if the like already exists
      const existingLike = await Likes.findOne({ where: { postId, userId } });
      if (existingLike) {
        return res.status(400).json({ message: 'You already liked this post.' });
      }
  
      // Create a new like
      await Likes.create({ postId, userId });
      res.status(201).json({ message: 'Like created successfully.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  
 
};



exports.getLikeCount = async (req,res) => {
  try {
      const postId = req.params.postId;
  
      // Count the number of likes for the specified post
      const likeCount = await Likes.count({ where: { postId } });

      const likes = await Likes.findAll({ where: { postId } });
      const userIds = likes.map(like=> like.userId);

      const likedUsers = await User.findAll({where: { userId: userIds} });

      const usernames = likedUsers.map(user =>
          user.username

      );
  
      res.json({ likeCount, usernames });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  
 
};


exports.createComment = async (req,res) => {
  try {
    const postId = req.params.postId;
    const userId = req.id; 
    const text = req.body.text; 

    // Create a new comment
    const comment = await Comments.create({ postId, userId, text });
    
    res.status(201).json({ message: 'Comment created successfully.', comment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }

  
 
};


exports.getComments = async (req,res) => {
  try {
    const postId = req.params.postId;

    // Find all comments for the specified post, including associated user information
    const comments = await Comments.findAll({ where: { postId } });

    const userIds = comments.map(comment => comment.userId);
    const commentedUsers = await User.findAll({ where: { userId: userIds } });

    const commentsFormatted = comments.map(comment => {
      // Find the user associated with this comment
      const user = commentedUsers.find(user => user.userId === comment.userId);

      // Combine the username with the comment text
      return {
        username: user.username,
        text: comment.text, // Assuming the comment text property is called 'text'
      };
    });

    res.status(201).json({ comments: commentsFormatted });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
  
 
};


exports.getPostDetails = async (req, res) => {
  try {
    const postId = req.params.postId;

     // Find the post details, including the post picture
     const post = await Posts.findOne({
      where: { id: postId },
      include: [
        {
          model: Image,
          as: 'postPic',
        },
      ],
    });

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    // Convert the postPic data to base64 before sending the response
    if (post.postPic && Buffer.isBuffer(post.postPic.data)) {
      post.postPic.data = post.postPic.data.toString('base64');
    }

    // Find all comments for the specified post, including associated user information
    const comments = await Comments.findAll({ where: { postId } });
    const userIds = comments.map(comment => comment.userId);
    const commentedUsers = await User.findAll({ where: { userId: userIds } });

    const commentsFormatted = comments.map(comment => {
      // Find the user associated with this comment
      const user = commentedUsers.find(user => user.userId === comment.userId);

      // Combine the username with the comment text
      return {
        username: user.username,
        text: comment.text, // Assuming the comment text property is called 'text'
      };
    });

    // Count the number of likes for the specified post
    const likeCount = await Likes.count({ where: { postId } });
    const likes = await Likes.findAll({ where: { postId } });
    const likeUserIds = likes.map(like => like.userId);
    const likedUsers = await User.findAll({ where: { userId: likeUserIds } });
    const usernames = likedUsers.map(user => user.username);

    res.status(200).json({
      postPicture: post.postPic, // Assuming the post picture property is called 'picture'
      likeCount,
      UsersLikedPosts: usernames,
      comments: commentsFormatted,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
