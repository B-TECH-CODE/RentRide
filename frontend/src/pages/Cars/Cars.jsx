import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter, resetFilters, setCars } from "../../redux/slices/carsSlice";
import CarCard from "../../components/CarCard/CarCard";
import { getCars } from "../../services/api";

export default function Cars() {
  const [params] = useSearchParams();
  const dispatch = useDispatch();

  const { items, filters } = useSelector((s) => s.cars);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Get cars from backend
  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true);

        const data = await getCars();

        dispatch(setCars(data));
        setError("");
      } catch (err) {
        console.error("Failed to fetch cars:", err);
        setError("Unable to load cars from the server.");
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, [dispatch]);

  // Read filters from URL
  useEffect(() => {
    const category = params.get("category");
    const location = params.get("location");

    if (category) {
      dispatch(setFilter({ category }));
    } else if (location) {
      dispatch(setFilter({ search: location }));
    }
  }, [params, dispatch]);

  const visible = items.filter((car) => {
    const q = filters.search.toLowerCase();

    const matchesQ =
      !q ||
      `${car.brand} ${car.model} ${car.location} ${car.category}`
        .toLowerCase()
        .includes(q);

    const matchesCat =
      filters.category === "All" ||
      car.category === filters.category;

    return (
      matchesQ &&
      matchesCat &&
      car.price <= Number(filters.maxPrice)
    );
  });

  if (loading) {
    return (
      <section className="section container">
        <div className="empty-state">
          <h3>Loading cars...</h3>
          <p>Getting available cars from RentRide server.</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="section container">
        <div className="empty-state">
          <h3>Something went wrong</h3>
          <p>{error}</p>
          <button
            className="btn btn-dark"
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="section container cars-page">
      <div className="page-heading">
        <div>
          <span className="eyebrow">RENT A CAR</span>
          <h1>Find your next ride</h1>
          <p>{visible.length} cars available for your search.</p>
        </div>
      </div>

      <div className="catalog-layout">
        <aside className="filters">
          <div className="filter-title">
            <strong>
              <SlidersHorizontal size={18} /> Filters
            </strong>

            <button onClick={() => dispatch(resetFilters())}>
              Reset
            </button>
          </div>

          <label>
            Search
            <input
              value={filters.search}
              onChange={(e) =>
                dispatch(setFilter({ search: e.target.value }))
              }
              placeholder="Brand, model or city"
            />
          </label>

          <label>
            Category
            <select
              value={filters.category}
              onChange={(e) =>
                dispatch(setFilter({ category: e.target.value }))
              }
            >
              <option>All</option>

              {[
                "SUV",
                "Sedan",
                "Hatchback",
                "Luxury",
                "Off-Road",
                "Compact SUV",
              ].map((x) => (
                <option key={x}>{x}</option>
              ))}
            </select>
          </label>

          <label>
            Maximum daily price{" "}
            <strong>
              ₹{Number(filters.maxPrice).toLocaleString()}
            </strong>

            <input
              type="range"
              min="1000"
              max="7000"
              step="100"
              value={filters.maxPrice}
              onChange={(e) =>
                dispatch(setFilter({ maxPrice: e.target.value }))
              }
            />
          </label>
        </aside>

        <div className="results">
          <div className="active-filters">
            {filters.category !== "All" && (
              <button
                onClick={() =>
                  dispatch(setFilter({ category: "All" }))
                }
              >
                {filters.category}
                <X />
              </button>
            )}

            {filters.search && (
              <button
                onClick={() =>
                  dispatch(setFilter({ search: "" }))
                }
              >
                {filters.search}
                <X />
              </button>
            )}
          </div>

          {visible.length ? (
            <div className="car-grid">
              {visible.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h3>No cars found</h3>
              <p>Try changing your filters.</p>

              <button
                className="btn btn-dark"
                onClick={() => dispatch(resetFilters())}
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}