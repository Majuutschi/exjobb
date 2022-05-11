import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.scss';
import Footer from './components/navigation/Footer';
import Navbar from './components/navigation/Navbar';
import Home from './views/Home';
import Training from './views/Training'
import Videos from './views/Videos'
import Daycare from './views/Daycare';
import About from './views/About';
import Connect from './views/Connect';
import Dogs from './views/Dogs';


const App = () => (
  
  <Router>
    <div id='page-container'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dogs' element={<Dogs />} />
        <Route path='/videos' element={<Videos />} />
        <Route path='/training' element={<Training />} />
        <Route path='/daycare' element={<Daycare />} />
        <Route path='/about' element={<About />} />
        <Route path='/connect' element={<Connect />} />

        {/* <Route path='*' element={<NotFound />} /> */}
      </Routes>
      
      <Footer />
    </div>
    
  </Router>
)

export default App;
