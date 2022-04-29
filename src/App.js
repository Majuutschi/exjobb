import './App.css';
import Footer from './components/navigation/Footer';
import Navbar from './components/navigation/Navbar';
import Connect from './views/Connect';
// import About from './views/About';
// import Dogs from './views/Dogs';
// import Daycare from './views/Daycare';
// import Training from './views/Training';
// import Home from './views/Home';
// import Videos from './views/Videos';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      {/* <Home /> */}
      {/* <Dogs /> */}
      {/* <Videos /> */}
      {/* <Training /> */}
      {/* <Daycare /> */}
      {/* <About /> */}
      <Connect />
      
      <Footer />
    </div>
  );
}

export default App;
