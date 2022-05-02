import React from 'react';
import './App.css';
import Footer from './components/navigation/Footer';
import Navbar from './components/navigation/Navbar';
// import About from './views/About';
// import Connect from './views/Connect';
// import Daycare from './views/Daycare';
// import Dogtraining from './views/Dogtraining';
import Home from './views/Home';


const App = () => (
  
  <div id='App'>
    <Navbar />
    <Home />
    {/* <Dogtraining />
    <Daycare />
    <About />
    <Connect /> */}
    
    <Footer />
  </div>
)

export default App;
