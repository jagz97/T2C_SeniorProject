const axios = require('axios');
const hotelconfig = require('../config/hotelapi.config.js')
const stripe = require('stripe')('sk_test_51KxjFzLGavGifIHgiMdIOOdRlyHLKg0elxsL5iStElwzlbGrboQmH7RHtS1CJ8VxmZ2IrefIiCjPjZpNqNwG1Aep00kaUCU9cP')
const db = require("../models");



const createOptions = (method, url, params) =>{
  return {
    method: method,
    url: url,
    params: params,
    headers: {
      'X-RapidAPI-Key': hotelconfig.API_KEY,
      'X-RapidAPI-Host': hotelconfig.HOST
    }

  };

};

const page_number = (reqBody) => {
  if (reqBody.page_number) {
    return reqBody.page_number;
  } else {
    return '0';
  }
};

const order = (reqBody) => {
  if (reqBody.order_by) {
    return reqBody.order_by;
  } else {
    return 'popularity';
  }
};

exports.hotelSearhCityName = async (req, res) => {



  
  let destId;
  let destType;

    const locationParams = {
      name: req.body.city,
      locale: 'en-us'

    };
    const locationOptions = createOptions('GET', 'https://booking-com.p.rapidapi.com/v1/hotels/locations', locationParams)
   
  
    try {
      const response = await axios.request(locationOptions);
            // Check if there are objects in the response data array
            if (response.data.length > 0) {
              const firstLocation = response.data[0]; // Get the first object
              destType = firstLocation.dest_type; // Extract the dest_type
              destId = firstLocation.dest_id; // Extract the dest_id
              
      
            }
            
            console.log(destId);
            console.log(destType);
      
    } catch (error) {
      
      console.log(error);   
    }





    // const searchParams =  {


    const searchParams =  {
      checkin_date: req.body.arrival_date,
      dest_type: destType,
      units: 'metric',
      checkout_date: req.body.departure_date,
      adults_number: req.body.guest_qty,
      order_by: order(req.body),
      dest_id: destId,
      filter_by_currency: 'USD',
      locale: 'en-us',
      room_number: req.body.room_qty,
      page_number: page_number(req.body),
      include_adjacency: 'true'
  };
  console.log(searchParams.order_by);
      
    
  

    // };
    // console.log(searchParams.search_id);
    const searchOptions = createOptions('GET', 'https://booking-com.p.rapidapi.com/v1/hotels/search', searchParams);
    
    try{
       const search_response = await axios.request(searchOptions);

       
       const totalCount = search_response.data.count;
       const totalPages = Math.ceil(totalCount / 20);
       console.log(search_response.message);

       
      const filteredResults = search_response.data.result.map(property => ({
        
        
        main_photo_url: property.max_photo_url,
        hotel_name: property.hotel_name_trans,
        district: property.district,
        address: property.address,
        zip: property.zip,
        city: property.city,
        country: property.country_trans, 
        price_breakdown: property.price_breakdown,
        checkout: property.checkout,
        checkin: property.checkin,
        hotel_id: property.hotel_id,
        review_nr: property.review_nr,
        review_score: property.review_score,
         review_score_word: property.review_score_word,
      }));

      const responseWithCount = {
        count: search_response.data.count, // Include the count key
        results: filteredResults, // Include your filtered results
        totalPages: totalPages,
      };

     
  
      res.status(200).send(responseWithCount);
      

    }catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Dates must be current.' });
    }

    

    
};



exports.getHotelDetails = async (req, res) => {

  let hotelData;
  

  const options = {
    method: 'GET',
    url: 'https://booking-com.p.rapidapi.com/v2/hotels/details',
    params: {
      hotel_id: req.body.hotel_id,
      currency: 'USD',
      locale: 'en-us',
      checkout_date: req.body.checkout_date,
      checkin_date: req.body.checkin_date,
    },
    headers: {
      'X-RapidAPI-Key': hotelconfig.API_KEY,
      'X-RapidAPI-Host': hotelconfig.HOST
    },
  };

  try {
    const response = await axios.request(options);

    hotelData = {
      hotelName: response.data.hotel_name,
      hotelAddress: response.data.address,
      city: response.data.city_trans,   
      zip: response.data.zip,
      country: response.data.country_trans,
      amount_per_night: response.data.composite_price_breakdown.gross_amount_per_night,
      propertyOffersIcons: response.data.property_highlight_strip,
      rooms: {},
      reviewNr: response.data.review_nr,   
      
    };

    // Remove "iconset/" from each icon in propertyOffersIcons
  hotelData.propertyOffersIcons.forEach((offer) => {
    if (offer.icon_list) {
      offer.icon_list.forEach((icon) => {
        if (icon.icon) {
          icon.icon = icon.icon.replace('iconset/', '');
        }
      });
    }
  });

    // Extract room information
    for (const roomId in response.data.rooms) {
      const room = response.data.rooms[roomId];
      hotelData.rooms[roomId] = { 
        photos: room.photos.map(photo => ({ url_original: photo.url_original })), 
        description: room.description,
       
        // Add more room details as needed
      };
    }

    
  } catch (error) {
    console.error(error);
    
  }

  console.log(hotelData);

  const reviewOptions = {
    method: 'GET',
  url: 'https://booking-com.p.rapidapi.com/v1/hotels/reviews',
  params: {
    sort_type: 'SORT_MOST_RELEVANT',
    hotel_id: req.body.hotel_id,
    locale: 'en-gb'
  },
  headers: {
    'X-RapidAPI-Key': 'dc738405a5msh5a6e6771d7ad9fap1a9b2ejsn149b95dc3d3e',
    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
  }
};

  try{

    const response = await axios.request(reviewOptions);

    const extractedReviews = {
      reviews: response.data.result.map(review => ({
        pros: review.pros,
        title: review.title,
        averageScore: review.average_score,
      })),
    };
    
    const results = {
      hotelData,
      extractedReviews
    }
    




    res.status(200).json(results);
  } catch(error){

    res.status(error.response?.status || 500).json({
      error: error.response?.data?.message || 'An error occurred',
    });


  }

};


 


exports.createCheckout = async (req,res) =>{

    const userId = req.id;
    const price = req.body.price;
 
      
    // Check if the user exists
    const user = await db.users.findByPk(userId);
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    
    function usdToCents(usd) {
      // Check if the input is a valid number
      if (typeof usd !== 'number' || isNaN(usd)) {
        return 'Invalid input';
      }
      
      // Convert USD to cents by multiplying by 100
      const cents = Math.round(usd * 100);
    
      return cents;
    }

    try{
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: req.body.hotelName,
              description: req.body.descreption,
            },
            unit_amount: usdToCents(182.1222),
          },
          quantity: req.body.roomQuantity,
        },
      ],
      mode: 'payment',
      success_url: 'http://localhost:3000/reservations',
      cancel_url: 'http://localhost:3000/cancel',
    });
  
   
    res.status(200).json({ sessionUrl: session.url });

  }catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
}
};

// Handle the success URL (e.g., /success) to create a reservation
exports.handleSuccess = async (req, res) => {

    const userId = req.id;
  try {
      // Extract necessary information from the request body
      const { hotelName, description, checkInDate, duration, guests, price, imageUrl } = req.body;

      // Check if the user exists
      const user = await db.users.findByPk(userId);
      if (!user) {
          return res.status(404).json({ error: 'User not found' });
      }

      // Create reservation
      const reservation = await db.reservations.create({
          userId,
          hotelName,
          description,
          checkInDate,
          duration,
          guests,
          price,
          imageUrl,
      });

      res.status(201).json(reservation);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getReservations = async (req, res) => {
  const userId = req.id;

  try {

    // Check if the user exists
    const user = await db.users.findByPk(userId);
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    // Get reservations for the user
    const reservations = await db.reservations.findAll({
        where: { userId},
    });

    res.status(200).json(reservations);
} catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
}

};
