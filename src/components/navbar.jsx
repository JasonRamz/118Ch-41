import './navbar.css';

import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <div className='navbar'>
            <Link className='btn btn-link' to='/home'>Home</Link>
            <Link className='btn btn-link' to='/about'>About Us</Link>
        </div>
    );
}
export default Navbar;