// import logo from './logo.svg';
import './App.css';
import Map from './Maps' ;
import Navbarr from './Navbar';

function App() {
  return (
    <div className="App">
    {/* navbar */}
      <Navbarr/>
      <h1>Our Location</h1> 
      <Map/>
    </div>
  );
}

export default App;
