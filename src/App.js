import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sepehr from './images/Sepehr.jpg'
import Navbar from './components/Navbar';
import React from 'react';
import Header from "./components/Header";
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Header/>
      <AboutMe sepehrImg={Sepehr}/>
      <Services/>
      <Portfolio/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
