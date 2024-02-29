import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import Service from './pages/service';
import Contact from './pages/contact';
import Feed from './pages/feed';
import CreateUser from './pages/createUser';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
  <BrowserRouter>
      <div className="App">
        <Navbar/>

        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/home" element={ <Home /> } />
          <Route path="/service" element={ <Service /> } />
          <Route path="/contact" element={ <Contact /> } />
          <Route path="/feed" element={<Feed/>} />
          <Route path='/createUser' element={ <CreateUser /> } />
        </Routes>

        <Footer/>
    </div>
  </BrowserRouter>
  );
}

export default App;
