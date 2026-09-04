import { Link, NavLink, useNavigate } from "react-router-dom";
import { CarFront, Heart, UserCircle, LogOut, Menu, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slices/authSlice";
import { useState } from "react";

export default function Navbar({ minimal = false }) {
  const [open, setOpen] = useState(false);
  const user = useSelector(s => s.auth.user);
  const wishlist = useSelector(s => s.wishlist);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signOut = () => { dispatch(logout()); navigate("/"); setOpen(false); };

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link className="brand" to="/" onClick={() => setOpen(false)}>
          <span className="brand-mark"><CarFront size={22}/></span>
          <span>Rent<span>Ride</span></span>
        </Link>
        {!minimal && (
          <>
            <button className="mobile-menu" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
            <nav className={`nav-links ${open ? "open" : ""}`}>
              <NavLink to="/" end onClick={() => setOpen(false)}>Home</NavLink>
              <NavLink to="/cars" onClick={() => setOpen(false)}>Cars</NavLink>
              <NavLink to="/bookings" onClick={() => setOpen(false)}>My Bookings</NavLink>
              <NavLink to="/wishlist" onClick={() => setOpen(false)}>Wishlist <b className="nav-count">{wishlist.length}</b></NavLink>
              {user ? (
                <div className="nav-user">
                  <NavLink to="/profile" onClick={() => setOpen(false)}><UserCircle size={18}/> {user.name}</NavLink>
                  <button className="icon-btn" title="Logout" onClick={signOut}><LogOut size={17}/></button>
                </div>
              ) : (
                <div className="nav-actions">
                  <Link className="btn btn-outline btn-sm" to="/login">Login</Link>
                  <Link className="btn btn-primary btn-sm" to="/register">Sign Up</Link>
                </div>
              )}
            </nav>
          </>
        )}
      </div>
    </header>
  );
}
