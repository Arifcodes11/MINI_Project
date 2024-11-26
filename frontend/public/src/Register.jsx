import React,{ useState , useEffect} from 'react'
import Header from './Header'
import Footer from './Footer'
import './Register.css'
import App from './App'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [showModal, setShowModal] = useState(true);
    const navigate = useNavigate();

  const closeModal = () => {
    setShowModal(false);
    navigate('/');
  };

  useEffect(() => {
    setShowModal(true);
  }, []);

   

  return (
    <div>
        <Header />
        {showModal && <App closeModal={closeModal} />}
        <div className="container_register">
            <h3>Thank you for joining us! </h3>
        </div>
        <div className="register_footer">
        <Footer/>
        </div>
    </div>
  )
}

export default Register