import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import App from './App';
import About from './About';
import Contact from './Contact';
import Temperature from './Temperature';
import Disease from './Disease';
import Register from './Register';


function AppRoutes() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<App/>} /> */}
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/temperature" element={<Temperature/>} />
        <Route path="/disease" element={<Disease/>} />
        {/* <Route path="/register" element={<App/>} /> */}
        <Route path="/register" element={<Register/>} />
      </Routes>
    </div>
  );
}

export default AppRoutes;