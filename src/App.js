import './App.css';
import Footer from './components/navigation/Footer';
import Navbar from './components/navigation/Navbar';
import Home from './views/Home';
import Videos from './views/Videos';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Home />
      <Videos />

      <Footer />
    </div>
  );
}

export default App;
