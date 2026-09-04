import { Link } from "react-router-dom";
import { CalendarDays, MapPin, XCircle } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { cancelBooking } from "../../redux/slices/bookingSlice";

export default function Bookings(){
 const bookings=useSelector(s=>s.bookings); const dispatch=useDispatch();
 return <section className="section container"><div className="page-heading"><span className="eyebrow">YOUR TRIPS</span><h1>My bookings</h1><p>View and manage your RentRide reservations.</p></div>{bookings.length?<div className="booking-list">{bookings.map(b=><article className="booking-card" key={b.id}><img src={b.image} alt={b.car}/><div className="booking-main"><div className="booking-head"><div><span className={`status ${b.status.toLowerCase()}`}>{b.status}</span><h3>{b.car}</h3></div><strong>₹{b.total.toLocaleString()}</strong></div><div className="booking-meta"><span><CalendarDays/> {b.pickup} → {b.dropoff}</span><span><MapPin/> {b.location}</span></div>{b.status==="Confirmed"&&<button className="text-danger" onClick={()=>dispatch(cancelBooking(b.id))}><XCircle/> Cancel booking</button>}</div></article>)}</div>:<div className="empty-state"><h3>No bookings yet</h3><p>Your confirmed rentals will appear here.</p><Link className="btn btn-dark" to="/cars">Find a car</Link></div>}</section>;
}
