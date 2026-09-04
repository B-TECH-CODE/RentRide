import { Link } from "react-router-dom";
import { CarFront, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link className="brand footer-brand" to="/"><span className="brand-mark"><CarFront size={22}/></span><span>Rent<span>Ride</span></span></Link>
          <p>Simple, transparent and reliable car rentals for city drives and road trips.</p>
        </div>
        <div><h4>Quick Links</h4><Link to="/cars">Browse Cars</Link><Link to="/bookings">My Bookings</Link><Link to="/wishlist">Wishlist</Link></div>
        <div><h4>Support</h4><a href="#faq">FAQs</a><a href="#contact">Contact Us</a><a href="#terms">Terms & Conditions</a></div>
        <div id="contact"><h4>Contact</h4><p><Mail size={15}/> support@rentride.demo</p><p><Phone size={15}/> +91 90000 00000</p><p><MapPin size={15}/> Hyderabad, India</p></div>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} RentRide. Demo project.</div>
    </footer>
  );
}
