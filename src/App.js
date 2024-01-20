import React,{ useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavBar.js';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Pocetna from './components/Pocetna';
import Korpa from './components/Korpa';
import Specijali from './components/Specijali';
import Login from "./components/login.js"
import Torte from "./components/Torte.js"
import Detalji from "./components/Detalji.js"
import { CartProvider } from './components/CartContext.js'; // Path to your CartContext file




function App() {

  const [user, setUser] = useState(null);

  const handleLogin = (authenticatedUser) => {
    setUser(authenticatedUser);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <CartProvider>
   <Router>
      <div className="App" >
        <NavigationBar></NavigationBar>
        <Routes>
          <Route path="/pocetna" element={<Pocetna user={user} onLogout={handleLogout} />} />
          <Route path="/korpa" element={<Korpa user={user} handleLogout={handleLogout} />} />
          <Route path="/specijali" element={<Specijali user={user} handleLogout={handleLogout}/>} />
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
          <Route path="/" element={<Navigate to="/specijali" />} />
          <Route path="/torte" element={<Torte/>} />
          <Route path="/detalji/:cakeId" element={<Detalji/>} />

        </Routes>
      </div>
    </Router>
    </CartProvider>
  );
}

export default App;
