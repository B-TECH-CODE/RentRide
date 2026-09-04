import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Check, Heart, MapPin, Star, Users, Gauge, Fuel, ShieldCheck } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishlist } from "../../redux/slices/wishlistSlice";
import { cars } from "../../data/cars";

export default function CarDetails() {
  const { id } = useParams();
  const car = cars.find(c => c.id === id);
  const navigate = useNavigate();
  const liked = useSelector(s => s.wishlist.includes(id));
  const dispatch = useDispatch();
  if (!car) return <div className="section container empty-state"><h2>Car not found</h2><Link className="btn btn-dark" to="/cars">Back to cars</Link></div>;

  return <section className="section container">
    <Link className="back-link" to="/cars"><ArrowLeft size={17}/> Back to cars</Link>
    <div className="details-grid">
      <div className="details-gallery"><img src={car.image} alt={`${car.brand} ${car.model}`}/></div>
      <div className="details-info">
        <div className="detail-top"><span className="car-badge static">{car.category}</span><button className={`heart-btn ${liked ? "liked" : ""}`} onClick={()=>dispatch(toggleWishlist(id))}><Heart fill={liked?"currentColor":"none"}/></button></div>
        <span className="eyebrow">{car.brand.toUpperCase()}</span><h1>{car.model}</h1><p className="detail-location"><MapPin size={16}/> {car.location} <span>•</span> <Star size={16} fill="currentColor"/> {car.rating}</p>
        <div className="detail-specs"><span><Users/> {car.seats} Seats</span><span><Gauge/> {car.transmission}</span><span><Fuel/> {car.fuel}</span></div>
        <p className="detail-description">{car.description}</p>
        <h3>Included features</h3><div className="features">{car.features.map(f=><span key={f}><Check/> {f}</span>)}</div>
        <div className="booking-box"><div><small>Daily rental</small><strong>₹{car.price.toLocaleString()} <em>/ day</em></strong></div><button className="btn btn-primary" onClick={()=>navigate(`/checkout/${car.id}`)}>Book this car</button></div>
        <div className="secure-note"><ShieldCheck/> Free cancellation up to 24 hours before pickup on eligible bookings.</div>
      </div>
    </div>
  </section>;
}
