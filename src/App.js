import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import About from './pages/about';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
      <div className="App">
        <Navbar/>

        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/home" element={ <Home /> } />
          <Route path="/about" element={ <About /> } />
        </Routes>

        <Footer/>
    </div>
  </BrowserRouter>
  );
}

export default App;
