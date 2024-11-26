const connectdb = require('./connectdb');
const axios =require('axios');
// Retrieve all the columns from the number collection
const unique_cities = async (clients) => {
    try {
        // Connect to the database
        clients = await connectdb(clients);
        console.log('Connected to the database');

        const db = clients.db('mini');
        const pipeline = [
            { $group: { _id: "$city" } },
            { $group: {
              _id: null,
              uniqueCities: { $addToSet: "$_id" },
              uniqueCitiesCount: { $sum: 1 }
            }},
            { $project: {
              _id: 0,
              uniqueCities: 1,
              uniqueCitiesCount: 1
            }}
          ];
        // Retrieve all the documents from the number collection
        const result = await db.collection('phones').aggregate(pipeline).toArray();
        const cities=result[0].uniqueCities;
        const citiesCount=result[0].uniqueCitiesCount;

        for(let i=0;i<cities.length;i++){
            const city = cities[i];
            const options = {
                method: 'GET',
                url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e80e6dade0796c5b05680ec3a1a4fadf&units=imperial`,
                
            };
            
            try {
                const response = await axios.request(options);
                db.collection('temp').updateOne({city: city},{ $set: {city: city, temp: response.data.main,wind:response.data.wind,description:response.data.weather[0].description}},{upsert:true});
                // db.collection('temp').updateOne({city: city},{ $set: {city: city, temp: response.data.main,wind:response.data.wind,description:response.data.weather[0].description}},{upsert:true});
            } catch (error) {
                console.error(error);
            }
        }
        // Close the database connection
        //clients.close();

        return clients;
    } catch (error) {
        console.error('Error retrieving numbers:', error);
        throw error;
    }
};

module.exports = unique_cities;




