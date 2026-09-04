import { Heart, Star, Users, Gauge, Fuel, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishlist } from "../../redux/slices/wishlistSlice";

export default function CarCard({ car }) {
  const dispatch = useDispatch();
  const liked = useSelector(s => s.wishlist.includes(car.id));
  return (
    <article className="car-card">
      <div className="car-image-wrap">
        <img src={car.image} alt={`${car.brand} ${car.model}`} />
        <button className={`heart-btn ${liked ? "liked" : ""}`} onClick={() => dispatch(toggleWishlist(car.id))}><Heart size={19} fill={liked ? "currentColor" : "none"}/></button>
        <span className="car-badge">{car.category}</span>
      </div>
      <div className="car-body">
        <div className="car-title-row"><div><h3>{car.brand} {car.model}</h3><span>{car.year} • {car.location}</span></div><div className="rating"><Star size={15} fill="currentColor"/>{car.rating}</div></div>
        <div className="car-specs"><span><Users/> {car.seats} Seats</span><span><Gauge/> {car.transmission}</span><span><Fuel/> {car.fuel}</span></div>
        <div className="car-bottom"><div><strong>₹{car.price.toLocaleString()}</strong><small>/ day</small></div><Link className="btn btn-dark btn-sm" to={`/cars/${car.id}`}>View Car <ArrowRight size={16}/></Link></div>
      </div>
    </article>
  );
}
