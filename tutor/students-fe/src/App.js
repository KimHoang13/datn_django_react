import Header from './components/Header'
import Footer from './components/Footer'
import News from './components/News'
import Login from './components/screen/Login'
import Register from './components/screen/Register'
import ScheStudent from './components/ScheStudent'
import './App.css';
// import Container from 'react-bootstrap/Container';

import React from 'react';
// import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
  <div>
    <Header />
    <BrowserRouter>
      <Routes>
        
          <Route path="schedule" element={<ScheStudent />} />
          {/* <Route path="schedule" element={<ScheTutor />} /> */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        
      </Routes>
    </BrowserRouter>
    <Footer />
  </div>
  );
}

export default App;
