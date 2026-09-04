import { Search, MapPin, CalendarDays } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [location, setLocation] = useState("Hyderabad");
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const navigate = useNavigate();

  const submit = e => {
    e.preventDefault();
    navigate(`/cars?location=${encodeURIComponent(location)}&pickup=${pickup}&dropoff=${dropoff}`);
  };

  return (
    <form className="search-box" onSubmit={submit}>
      <label><MapPin/><span><small>Pick-up location</small><select value={location} onChange={e => setLocation(e.target.value)}><option>Hyderabad</option><option>Bengaluru</option><option>Chennai</option><option>Vijayawada</option></select></span></label>
      <label><CalendarDays/><span><small>Pick-up date</small><input type="date" value={pickup} onChange={e => setPickup(e.target.value)} required/></span></label>
      <label><CalendarDays/><span><small>Return date</small><input type="date" value={dropoff} onChange={e => setDropoff(e.target.value)} required/></span></label>
      <button className="btn btn-primary search-btn"><Search size={19}/> Search</button>
    </form>
  );
}
