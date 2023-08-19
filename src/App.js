import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from './components/Nav';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Section from './components/Section';
import {Routes, Route} from 'react-router-dom';
import SignIn from './pages/SignIn';
import LogIn from './pages/LogIn';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
       <Nav/>
      <Routes>
      <Route exact path="/" element={<Home />} />
    <Route path="/signup" element={<SignIn />} />
    <Route path="/login" element={<LogIn />} />
  
   
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
