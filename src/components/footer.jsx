import './footer.css';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';


function Footer() {
    return <footer className="footer">
        <div className="social-icons">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
            </a>
            <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
            </a>
        </div>
        <p>&copy; 2024 LashRoom. All rights reserved.</p>
    </footer>
}
export default Footer;