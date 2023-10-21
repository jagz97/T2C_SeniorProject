const axios = require('axios');
const hotelconfig = require('../config/hotelapi.config.js')


const createOptions = (method, url, params) =>{
  return {
    method: method,
    url: hotelconfig.URL_PREFIX + url,
    params: params,
    headers: {
      'X-RapidAPI-Key': hotelconfig.API_KEY,
      'X-RapidAPI-Host': hotelconfig.HOST
    }

  };

};

exports.hotelSearhCityName = async (req, res) => {

  let destId;
  let destType;

    const locationParams = {
      text: req.body.city,
      languagecode: 'en-us'

    };
    const locationOptions = createOptions('GET', '/locations/auto-complete', locationParams)
    console.log(locationOptions.url);
  
    try {
      const response = await axios.request(locationOptions);
            // Check if there are objects in the response data array
            if (response.data.length > 0) {
              const firstLocation = response.data[0]; // Get the first object
              destType = firstLocation.dest_type; // Extract the dest_type
              destId = firstLocation.dest_id; // Extract the dest_id
              
      
            }
            
            console.log(destId);
      
    } catch (error) {
      
      console.log(error);   
    }

    const searchParams =  {
      
        offset: '0',
        arrival_date: req.body.arrival_date,  // req format: '2023-10-12'
        departure_date: req.body.departure_date , //'2023-10-13'
        guest_qty: req.body.guest_qty,
        dest_ids: destId,
        room_qty: req.body.room_qty,
        search_type: destType,
        price_filter_currencycode: 'USD',
        languagecode: 'en-us',
  

    };

    const searchOptions = createOptions('GET', '/properties/list', searchParams);
    
    try{
      const search_response = await axios.request(searchOptions);
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
  
      res.status(200).json(filteredResults);
      

    }catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    }

    

    
  };

  