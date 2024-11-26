require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const retrieve_numbers = require('./db/retrieve_numbers');
const unique_cities = require('./db/unique_cities');
const temperature_retrieve = require('./db/temperature_retrieve');
const fetchMarketData = require('./market_price');
const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

async function everydayWork(){
let clients;
let numbers=[];
let temp=[];
clients=await unique_cities();

result = await retrieve_numbers(clients);
({numbers, clients} = result);
let prices = await fetchMarketData();

result = await temperature_retrieve(clients);
({temp, clients} = result);
console.log(numbers);
console.log(temp);
const dictionary = temp.reduce((acc, cur) => {
acc[cur.city] = cur;
return acc;
}, {});
numbers.map(num => {
tem=dictionary[num.city];
console.log("num=",temp);
client.messages.create({
body: `ಹಲೋ ${num.name},
ನಿಮ್ಮ ಮಾರುಕಟ್ಟೆಯಲ್ಲಿ ಟೊಮೇಟೊ ಬೆಲೆಗಳು:${num['mandi']} ಕನಿಷ್ಠ ಬೆಲೆ ${prices[num['mandi']][0]}/ಕ್ವಿಂಟಾಲ್, ಗರಿಷ್ಠ ಬೆಲೆ ${prices[num['mandi']][1]}/ಕ್ವಿಂಟಾಲ್
ಇದು ${num.city}ರ ಇತ್ತೀಚಿನ ಹವಾಮಾನ ನವೀಕರಣ:
ತಾಪಮಾನ : ಪ್ರಸ್ತುತ ತಾಪಮಾನ ${tem.temp.temp}°F, ${tem.temp.feels_like}°F ಅನಿಸುತ್ತಿದೆ.
ಕನಿಷ್ಠ ತಾಪಮಾನ : ${tem.temp_min}°F
ಗರಿಷ್ಠ ತಾಪಮಾನ: ${tem.temp.temp_max}°F
ಒತ್ತಡ: ${tem.temp.pressure} hPa
ಆರ್ದ್ರತೆ: ${tem.temp.humidity}%
ಹವಾಮಾನ: ${tem.description}
ಗಾಳಿ: ಗಾಳಿಯ ವೇಗ ${tem.wind.speed} mph, ಪಶ್ಚಿಮದಿಂದ ( ${tem.wind.deg}°) ಬಿರುಸಾದ ವೇಗ ${tem.wind.gust} mph.
ದಯವಿಟ್ಟು ನಿಮ್ಮ ಕೃಷಿ ಚಟುವಟಿಕೆಗಳನ್ನು ಅನುಗುಣವಾಗಿ ಯೋಜಿಸಿ.
ಸುರಕ್ಷಿತವಾಗಿ ಇರಿ ಮತ್ತು ಹರ್ಷಕರವಾದ ಕೃಷಿ!
ಶುಭಾಶಯಗಳು,
ಕೃಷಿ ಸಹಾಯಕರ ತಂಡ`

,
from: '+15734961869',
to: num.number
})
.then(message => console.log(message.sid))
.catch(error => console.error(error));
});

console.log(dictionary);
clients.close();
}

//setInterval(main(), 1000*60*60*24);

const main = async () => {
const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB Atlas'));

// User schema and model
const userSchema = new mongoose.Schema({
username: String,
city: String,
number: String,
mandi: String,
});

const User = mongoose.model('phone', userSchema);

// Register route
app.post('/api/auth/register', async (req, res) => {
try {
const { username, city, number,mandi } = req.body;

// Check if user with the same email already exists
const existingUser = await User.findOne({ username });
if (existingUser) {
return res.status(400).json({ error: 'Email already exists' });
}

// Create new user
const newUser = new User({ username, city, number,mandi });
await newUser.save();

res.status(201).json({ message: 'User registered successfully' });
} catch (error) {
console.error('Error during registration:', error);
res.status(500).json({ error: 'An error occurred during registration' });
}
});
try{
setInterval(everydayWork, 60*1000*60*2);
}
catch(e){   
console.log(e);
}
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});
}
main();
// Z8TFGFRA992HX3ZCAB5SFSTZ