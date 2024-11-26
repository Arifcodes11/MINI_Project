import React from 'react';
import './About.css';
import Header from './Header';
import Footer from './Footer';

const AboutUs = () => {
    return (<>
    <Header/>
    <div className='about_main'>
            <h1>About Us</h1>
            <p>Welcome to our website dedicated to supporting farmers with essential tools and information tailored to their needs. We understand the challenges farmers face, and our mission is to empower you with easy access to crucial data and innovative solutions.</p>
        <div className="about-us-container">
            <h3>Our Commitment</h3>
            <ul>
                <li><strong>Localized Information:</strong> Easily access real-time updates on temperature, humidity, and market prices in your city, all in your local language. Stay informed and make informed decisions effortlessly.</li>
                <li><strong>Innovative Technology:</strong> Our platform goes beyond conventional support. With our cutting-edge feature, simply upload a photo of your crop, and our system will swiftly detect potential diseases. Early detection means timely action, safeguarding your yields and reducing crop loss.</li>
            </ul>
            <h3>Why Choose Us?</h3>
            <ul>
                <li><strong>Empowering Farmers:</strong> We prioritize your success by equipping you with the tools needed to thrive in a dynamic agricultural environment.</li>
                <li><strong>User-Friendly Interface:</strong> Navigate our user-friendly interface designed with your convenience in mind, ensuring seamless access to critical information and resources.</li>
                <li><strong>Community Support:</strong> Join a community of like-minded farmers, exchanging knowledge and experiences to foster growth and sustainability.</li>
            </ul>
        </div>
    </div>
        <Footer/>
        </>
    );
};

export default AboutUs;
