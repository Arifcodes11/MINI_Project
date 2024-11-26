// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Header from './Header'; // Import Header component
// import Footer from './Footer';

// const Temperature = () => {
//     const [weatherData, setWeatherData] = useState(null);

//     useEffect(() => {
//         const fetchWeatherData = async () => {
//             const options = {
//                 method: 'GET',
//                 url: 'https://weatherbit-v1-mashape.p.rapidapi.com/current',
//                 params: {
//                     lon: '77.1173',
//                     lat: '13.3379',
//                     lang: 'en'
//                 },
//                 headers: {
//                     'X-RapidAPI-Key': 'eae6bb4d77msh70deaa333b74bd7p1e4d0bjsn699008b44c04',
//                     'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
//                 }
//             };

//             try {
//                 const response = await axios.request(options);
//                 setWeatherData(response.data);
//             } catch (error) {
//                 console.error('Error fetching weather data:', error);
//             }
//         };

//         fetchWeatherData();
//     }, []);

//     return (
//         <div className="wrapper">
//             <Header /> 
//             <div className="content">
//                 <h1>Weather Information</h1>
//                 {weatherData ? (
//                     <div>
//                         <p>City: {weatherData.data[0].city_name}</p>
//                         <p>Temperature: {weatherData.data[0].temp}°C</p>
//                         <p>Description: {weatherData.data[0].weather.description}</p>
//                         <p>Wind Speed: {weatherData.data[0].wind_spd} m/s</p>
//                     </div>
//                 ) : (
//                     <p>Loading weather data...</p>
//                 )}
//             </div>
//             <Footer />
//         </div>
//     );
// };

// export default Temperature;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header'; // Import Header component
import Footer from './Footer';
import './Temperature.css'

const Temperature = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWeatherData = async (latitude, longitude) => {
            try {
                // Fetch the weather data using the obtained latitude and longitude
                const weatherOptions = {
                    method: 'GET',
                    url: "https://api.openweathermap.org/data/2.5/weather",
                    params: {
                        lat: latitude,
                        lon: longitude,
                        appid: 'e80e6dade0796c5b05680ec3a1a4fadf',
                        units: 'imperial'
                    }
                };

                const weatherResponse = await axios.request(weatherOptions);
                setWeatherData(weatherResponse.data);

                // Example code to update MongoDB or any other database with the weather data
                // Replace with your actual database update logic
                // Assuming db is defined elsewhere, update can be done as follows:
                // db.collection('temp').updateOne({city: weatherResponse.data.name}, { $set: {...} }, { upsert: true });
            } catch (error) {
                console.error('Error fetching weather data:', error);
            } finally {
                setLoading(false);
            }
        };

        const getLocationAndFetchWeather = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    const { latitude, longitude } = position.coords;
                    console.log(latitude,longitude)
                    fetchWeatherData(latitude, longitude);
                }, (error) => {
                    console.error('Error getting geolocation:', error);
                    setLoading(false); // Set loading to false on error
                });
            } else {
                console.error('Geolocation is not supported by this browser.');
                setLoading(false); // Set loading to false if geolocation is not supported
            }
        };

        getLocationAndFetchWeather();
    }, []);

    return (
        <div className="wrapper">
            <Header />
            <div className="content_temp">
                <h1>Weather Information</h1>
                {loading ? (
                    <p>Loading weather data...</p>
                ) : weatherData ? (
                    <div className='temp_card'>
                        <p>City: {weatherData.name}</p>
                        <p>Temperature: {weatherData.main.temp}°F</p>
                        <p>Description: {weatherData.weather[0].description}</p>
                        <p>Wind Speed: {weatherData.wind.speed} m/s</p>
                        
                    </div>
                ) : (
                    <p>Unable to fetch weather data.</p>
                )}
            </div>
            <div className="footer_div_temp">
            <Footer />
            </div>
        </div>
    );
};

export default Temperature;
