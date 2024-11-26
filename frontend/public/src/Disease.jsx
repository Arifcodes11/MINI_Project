import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import './Disease.css';

const ImageUploader = () => {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');
    const [predictedDisease, setPredictedDisease] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) {
            setMessage('Please select an image first.');
            return;
        }

        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await axios.post('http://localhost:5050/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            setMessage(response.data.message);
            setPredictedDisease(response.data.predicted_disease);
        } catch (error) {
            setMessage('Error uploading image.');
            console.error(error);
        }
    };

    return (<div className="disease_main"> 
            <Header/>
        <div className='disease_main_sub'>
            <h2>Image Uploader</h2>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
            {message && <p>{message}</p>}
            {predictedDisease && <p>Predicted Disease: {predictedDisease}</p>}
        </div>
        <Footer/>
        </div>   
    );
};

export default ImageUploader;