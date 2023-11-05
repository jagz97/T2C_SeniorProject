const axios = require('axios');
const hotelconfig = require('../config/hotelapi.config.js')



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

      const filteredResults = search_response.data.result.map(property => ({
        
        
        main_photo_url: property.main_photo_url,
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
      res.status(500).json({ error: 'An error occurred' });
    }

    

    
};

  
exports.getHotelDetails = async (req,res) => {

    
    const searchParams = {
     
        hotel_id: req.body.hotel_id,
        currency: 'USD',
        locale: 'en-us',
        checkout_date: req.body.checkout_date,
        checkin_date: req.body.checkin_date,
      
      
    };
    

    const options = createOptions('GET', 'https://booking-com.p.rapidapi.com/v2/hotels/details', searchParams);
    try {
      const response = await axios.request(options);
      res.status(200).send(response.data);
      

    }catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    }
  };