import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";

import Cars from "../pages/Cars/Cars";
import CarDetails from "../pages/CarDetails/CarDetails";
import Bikes from "../pages/Bikes/Bikes";


import Wishlist from "../pages/Wishlist/Wishlist";
import Bookings from "../pages/Bookings/Bookings";
import Profile from "../pages/Profile/Profile";
import Checkout from "../pages/Checkout/Checkout";
import OrderSuccess from "../pages/OrderSuccess/OrderSuccess";

import Dashboard from "../pages/Dashboard/Dashboard";

import NotFound from "../pages/NotFound/NotFound";

export default function AppRoutes() {
  const authPages = ["/login", "/register", "/forgot-password"];

  return (
    <div className="app-shell">
      <Routes>
        {/* Authentication Pages */}
        {authPages.map((path) => (
          <Route
            key={path}
            path={path}
            element={
              <div className="auth-layout">
                <Navbar minimal />
                <RoutesSwitch path={path} />
              </div>
            }
          />
        ))}

        {/* Main Website */}
        <Route
          path="*"
          element={
            <>
              <Navbar />

              <main className="page-content">
                <Routes>
                  <Route path="/" element={<Home />} />

                  {/* Dashboard */}
                  <Route path="/dashboard" element={<Dashboard />} />

                  {/* Cars */}
                  <Route path="/cars" element={<Cars />} />
                  <Route path="/cars/:id" element={<CarDetails />} />

                  <Route path="/bikes" element={<Bikes />} />

                  {/* User Pages */}
                  <Route path="/wishlist" element={<Wishlist />} />
                  <Route path="/bookings" element={<Bookings />} />
                  <Route path="/profile" element={<Profile />} />

                  {/* Checkout */}
                  <Route path="/checkout/:id" element={<Checkout />} />
                  <Route
                    path="/order-success/:id"
                    element={<OrderSuccess />}
                  />

                  {/* 404 */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>

              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

function RoutesSwitch({ path }) {
  if (path === "/login") {
    return <Login />;
  }

  if (path === "/register") {
    return <Register />;
  }

  return <ForgotPassword />;
}