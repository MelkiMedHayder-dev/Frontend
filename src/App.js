import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Login from './Pages/login/login';
import Register from './Pages/login/register';
import ForgetPassword from './Pages/login/forgetpass';
import Home from './Pages/home/home';
import AddRoom from './Pages/Add Room/AddRoom';
import UserProfile from './Pages/login/UserProfile';

function App() {
  const [user, setUser] = useState(null);
  const [houses, setHouses] = useState([]);
  const [activeHouse, setActiveHouse] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/home" element={
          <Home 
            user={user} 
            setUser={setUser} 
            houses={houses} 
            setHouses={setHouses} 
            activeHouse={activeHouse} 
            setActiveHouse={setActiveHouse}
          />} 
        />
        <Route path="/add-room" element={
          <AddRoom 
            user={user} 
            houses={houses} 
            activeHouse={activeHouse} 
            setActiveHouse={setActiveHouse}
          />} 
        />
        <Route path='/profil' element={<UserProfile/>} />
      </Routes>
    </Router>
  );
}

export default App;
