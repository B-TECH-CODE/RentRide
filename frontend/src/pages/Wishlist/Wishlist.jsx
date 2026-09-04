import { Heart } from "lucide-react";
import { useSelector } from "react-redux";
import CarCard from "../../components/CarCard/CarCard";
import { cars } from "../../data/cars";

export default function Wishlist(){
 const ids=useSelector(s=>s.wishlist); const list=cars.filter(c=>ids.includes(c.id));
 return <section className="section container"><div className="page-heading"><span className="eyebrow">SAVED CARS</span><h1>Your wishlist</h1><p>Keep your favourite rides in one place.</p></div>{list.length?<div className="car-grid">{list.map(c=><CarCard key={c.id} car={c}/>)}</div>:<div className="empty-state"><Heart size={38}/><h3>Your wishlist is empty</h3><p>Tap the heart on a car to save it here.</p><a className="btn btn-dark" href="/cars">Browse cars</a></div>}</section>;
}
