import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home'
import About from './Component/About/About';
import Interest from './Component/Interest/Interest';
import MyWork from './Component/MyWork/MyWork';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Interest/>
      <MyWork/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
