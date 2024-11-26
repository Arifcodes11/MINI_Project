
// import React, { useState } from 'react';
// import axios from 'axios';
// import './App.css';

// function App({ closeModal }) {
//   const [formData, setFormData] = useState({
//     username: '',
//     city: '',
//     number: '',
//     mandi: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/auth/register', formData);
//       console.log(response.data);
//       closeModal();
//     } catch (error) {
//       console.error('Error during registration:', error);
//     }
//   };

//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <h4>Fill the form to join with us</h4>
//         <form className="main_card" onSubmit={handleSubmit}>
//           <label htmlFor="username">Username:</label>
//           <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
//           <label htmlFor="city">City:</label>
//           <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} required />
//           <label htmlFor="number">Number:</label>
//           <input type="text" id="number" name="number" value={formData.number} onChange={handleChange} required />
//           <label htmlFor="mandi">Mandi:</label>
//           <select id="mandi" value={formData.mandi} name="mandi" onChange={handleChange} required>
//           <option value="">Select Mandi</option>       
//           <option value="KOLAR"  >KOLAR</option>
//           <option value="MYSURU"  >MYSURU</option>
//           <option value="SHIVAMOGGA"  >SHIVAMOGGA</option>
//           <option value="UDIPI"  >UDIPI</option>
//           </select>  
//           <button type="submit">Register</button>
//         </form>
//         <button onClick={closeModal}>Close</button>
//       </div>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App({ closeModal }) {
  const [formData, setFormData] = useState({
    username: '',
    city: '',
    number: '',
    mandi: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form with data: ", formData); // Debugging step
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', formData);
      console.log("Server response: ", response.data); // Debugging step
      closeModal();
    } catch (error) {
      console.error('Error during registration:', error);
      alert('try again after some time, internal Error'); // User feedback
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h4>Fill the form to join with us</h4>
        <form className="main_card" onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
          <label htmlFor="city">City:</label>
          <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} required />
          <label htmlFor="number">Number:</label>
          <input type="text" id="number" name="number" value={formData.number} onChange={handleChange} required />
          <label htmlFor="mandi">Mandi:</label>
          <select id="mandi" value={formData.mandi} name="mandi" onChange={handleChange} required>
            <option value="">Select Mandi</option>       
            <option value="KOLAR">KOLAR</option>
            <option value="MYSURU">MYSURU</option>
            <option value="CHICKBALLAPUR">CHICKBALLAPUR</option>
            <option value="MULBAGAL">MULBAGAL</option>
          </select>  
          <button type="submit">Register</button>
        </form>
        <button onClick={closeModal} className='app_close'>Close</button>
      </div>
    </div>
  );
}

export default App;
