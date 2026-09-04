import { Link } from "react-router-dom";
export default function NotFound(){return <section className="section container empty-state"><h1>404</h1><h2>Page not found</h2><p>The page you're looking for doesn't exist.</p><Link className="btn btn-dark" to="/">Go home</Link></section>}
