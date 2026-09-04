import React from "react";
import {
  Car,
  Bike,
  CalendarCheck,
  IndianRupee,
  Users,
  TrendingUp,
} from "lucide-react";
import "./Dashboard.css";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Vehicles",
      value: "20",
      change: "+12%",
      icon: Car,
    },
    {
      title: "Available Cars",
      value: "10",
      change: "+8%",
      icon: Car,
    },
    {
      title: "Available Bikes",
      value: "10",
      change: "+15%",
      icon: Bike,
    },
    {
      title: "Total Bookings",
      value: "128",
      change: "+24%",
      icon: CalendarCheck,
    },
    {
      title: "Total Revenue",
      value: "₹4.82L",
      change: "+18%",
      icon: IndianRupee,
    },
    {
      title: "Customers",
      value: "356",
      change: "+21%",
      icon: Users,
    },
  ];

  const recentBookings = [
    {
      id: "#RR1001",
      customer: "Rahul Kumar",
      vehicle: "Toyota Camry",
      type: "Car",
      date: "04 Sep 2026",
      amount: "₹5,000",
      status: "Confirmed",
    },
    {
      id: "#RR1002",
      customer: "Arjun Reddy",
      vehicle: "Royal Enfield Classic 350",
      type: "Bike",
      date: "03 Sep 2026",
      amount: "₹2,400",
      status: "Confirmed",
    },
    {
      id: "#RR1003",
      customer: "Priya Sharma",
      vehicle: "BMW 3 Series",
      type: "Car",
      date: "03 Sep 2026",
      amount: "₹10,000",
      status: "Completed",
    },
    {
      id: "#RR1004",
      customer: "Vikram Singh",
      vehicle: "Yamaha MT-15",
      type: "Bike",
      date: "02 Sep 2026",
      amount: "₹2,000",
      status: "Pending",
    },
    {
      id: "#RR1005",
      customer: "Sneha Rao",
      vehicle: "Mahindra Thar",
      type: "Car",
      date: "01 Sep 2026",
      amount: "₹7,000",
      status: "Completed",
    },
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <h1>Dashboard</h1>
          <p>Welcome back! Here's what's happening with RentRide today.</p>
        </div>

        <button className="dashboard-btn">
          <TrendingUp size={18} />
          View Reports
        </button>
      </div>

      <div className="stats-grid">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div className="stat-card" key={stat.title}>
              <div className="stat-top">
                <div className="stat-icon">
                  <Icon size={22} />
                </div>

                <span className="stat-change">
                  {stat.change}
                </span>
              </div>

              <h2>{stat.value}</h2>
              <p>{stat.title}</p>
            </div>
          );
        })}
      </div>

      <div className="dashboard-grid">
        <div className="chart-card">
          <div className="card-header">
            <div>
              <h2>Revenue Overview</h2>
              <p>Monthly revenue performance</p>
            </div>

            <select>
              <option>2026</option>
              <option>2025</option>
              <option>2024</option>
            </select>
          </div>

          <div className="chart">
            <div className="chart-bars">
              {[45, 60, 52, 72, 65, 80, 74, 90, 78, 88, 95, 100].map(
                (height, index) => (
                  <div className="bar-wrapper" key={index}>
                    <div
                      className="bar"
                      style={{ height: `${height}%` }}
                    ></div>
                    <span>
                      {[
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec",
                      ][index]}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        <div className="booking-summary">
          <div className="card-header">
            <div>
              <h2>Booking Summary</h2>
              <p>This month's bookings</p>
            </div>
          </div>

          <div className="summary-item">
            <div>
              <span>Cars</span>
              <strong>76</strong>
            </div>
            <div className="progress">
              <div style={{ width: "76%" }}></div>
            </div>
          </div>

          <div className="summary-item">
            <div>
              <span>Bikes</span>
              <strong>52</strong>
            </div>
            <div className="progress">
              <div style={{ width: "52%" }}></div>
            </div>
          </div>

          <div className="summary-total">
            <span>Total Bookings</span>
            <strong>128</strong>
          </div>
        </div>
      </div>

      <div className="recent-card">
        <div className="card-header">
          <div>
            <h2>Recent Bookings</h2>
            <p>Latest RentRide reservations</p>
          </div>

          <button className="view-all">View All</button>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Booking ID</th>
                <th>Customer</th>
                <th>Vehicle</th>
                <th>Type</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {recentBookings.map((booking) => (
                <tr key={booking.id}>
                  <td>{booking.id}</td>
                  <td>{booking.customer}</td>
                  <td>{booking.vehicle}</td>
                  <td>{booking.type}</td>
                  <td>{booking.date}</td>
                  <td>{booking.amount}</td>
                  <td>
                    <span
                      className={`status ${booking.status.toLowerCase()}`}
                    >
                      {booking.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;