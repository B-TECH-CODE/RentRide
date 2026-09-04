import { Car, Crown, Route, Zap } from "lucide-react";
import { Link } from "react-router-dom";
const icons = { SUV: Car, Sedan: Route, Hatchback: Zap, Luxury: Crown };
export default function CategoryCard({ name, count }) {
  const Icon = icons[name] || Car;
  return <Link to={`/cars?category=${encodeURIComponent(name)}`} className="category-card"><Icon/><div><strong>{name}</strong><span>{count} cars</span></div></Link>;
}
