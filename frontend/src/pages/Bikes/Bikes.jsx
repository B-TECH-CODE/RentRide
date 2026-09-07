import { useEffect, useState } from "react";
import { getBikes } from "../../services/api";
import CarCard from "../../components/CarCard/CarCard";

export default function Bikes() {
  const [bikes, setBikes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBikes = async () => {
      try {
        const data = await getBikes();
        setBikes(data);
      } catch (err) {
        console.error("Failed to load bikes:", err);
        setError("Unable to load bikes.");
      } finally {
        setLoading(false);
      }
    };

    fetchBikes();
  }, []);

  if (loading) {
    return (
      <div className="page-content">
        <h1>Loading bikes...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page-content">
        <h1>{error}</h1>
      </div>
    );
  }

  return (
    <div className="page-content">
      <section className="page-hero">
        <p className="eyebrow">RENT A BIKE</p>
        <h1>Find Your Perfect Bike</h1>
        <p>
          Explore our collection of bikes available for rent in Hyderabad.
        </p>
      </section>

      <section className="cars-grid">
        {bikes.map((bike) => (
          <CarCard key={bike.id} car={bike} />
        ))}
      </section>
    </div>
  );
}
