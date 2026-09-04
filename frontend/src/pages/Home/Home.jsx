import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, WalletCards, Clock3, Star } from "lucide-react";
import SearchBar from "../../components/SearchBar/SearchBar";
import CarCard from "../../components/CarCard/CarCard";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import Banner from "../../components/Banner/Banner";
import { cars } from "../../data/cars";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-copy"><span className="eyebrow">YOUR JOURNEY STARTS HERE</span><h1>Find the right car.<br/><span>Make it your ride.</span></h1><p>Rent reliable cars at transparent prices. Pick a car, choose your dates and hit the road.</p><div className="hero-note"><span>✓ No hidden fees</span><span>✓ Verified vehicles</span><span>✓ Easy cancellation</span></div></div>
          <SearchBar />
        </div>
      </section>
      <section className="trust-strip"><div className="container trust-grid"><span><ShieldCheck/> Verified vehicles</span><span><WalletCards/> Transparent pricing</span><span><Clock3/> Flexible rentals</span><span><Star/> 4.8/5 customer rating</span></div></section>
      <section className="section container"><div className="section-head"><div><span className="eyebrow">BROWSE BY TYPE</span><h2>Choose your perfect ride</h2></div><Link to="/cars">View all <ArrowRight size={17}/></Link></div><div className="category-grid"><CategoryCard name="SUV" count="3"/><CategoryCard name="Sedan" count="1"/><CategoryCard name="Hatchback" count="1"/><CategoryCard name="Luxury" count="1"/></div></section>
      <section className="section section-muted"><div className="container"><div className="section-head"><div><span className="eyebrow">POPULAR CHOICES</span><h2>Cars people love</h2></div><Link to="/cars">View all <ArrowRight size={17}/></Link></div><div className="car-grid">{cars.slice(0,4).map(car => <CarCard key={car.id} car={car}/>)}</div></div></section>
      <section className="section container"><Banner/></section>
    </>
  );
}
