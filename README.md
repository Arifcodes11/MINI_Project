# 🍅 Tomato Plant Disease Detection

## 🌱 Overview
Tomato farmers can now detect plant diseases in real-time using this web-based application powered by **MobileNetV2**, **TensorFlow**, and **Flask**. This project provides accurate disease classification, real-time weather updates, market price alerts, and SMS notifications.

## 🚀 Features
- 🖼 **Real-time Disease Detection**: Upload an image of a tomato plant to detect diseases instantly using **MobileNetV2**.
- 🌤 **Live Weather Updates**: Integrated API to provide real-time weather conditions.
- 📈 **Market Price Alerts**: Get the latest market price updates for tomatoes.
- 📡 **Instant Notifications**: Uses **Twilio API** to send alerts via SMS.
- 🌎 **Localization Support**: Supports **Kannada language** for better accessibility.

## 🛠 Technology Stack
- **Frontend**: React.js, TailwindCSS ⚛️💅
- **Backend**: Node.js, Express.js 🖥️
- **AI Model**: MobileNetV2, TensorFlow 🤖
- **API Services**: Flask, Twilio API 📡

## 📦 Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/tomato-disease-detection.git
cd tomato-disease-detection

# Install frontend dependencies
cd client
npm install
npm start

# Install backend dependencies
cd ../server
npm install
node server.js

# Run Flask API for AI Model
cd ../flask-api
pip install -r requirements.txt
python app.py
```

## 🖼 How It Works
1. 📷 **Upload an image** of the tomato plant.
2. 🔎 **AI Model analyzes** and classifies the disease.
3. 🌡 **Weather & market prices** are fetched in real-time.
4. 📩 **Farmers receive alerts** via SMS.

## 🔮 Future Enhancements
- 📊 **Detailed Disease Reports** with treatment suggestions.
- 📍 **AI-powered Farming Recommendations** based on weather and soil data.
- 📱 **Mobile App Version** for Android and iOS.



Happy Farming! 🚜🌿

