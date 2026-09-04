import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CarFront, LockKeyhole, Mail } from "lucide-react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/authSlice";

export default function Login() {
  const [email,setEmail]=useState(""); const [password,setPassword]=useState(""); const [error,setError]=useState("");
  const dispatch=useDispatch(); const navigate=useNavigate(); const location=useLocation();
  const submit=e=>{e.preventDefault(); if(!email||!password)return setError("Please enter your email and password."); const name=email.split("@")[0].replace(/[._-]/g," "); dispatch(login({name:name.replace(/\b\w/g,c=>c.toUpperCase()),email})); navigate(location.state?.from||"/");};
  return <AuthCard title="Welcome back" subtitle="Sign in to continue your RentRide journey."><form onSubmit={submit} className="form-stack">{error&&<div className="form-error">{error}</div>}<label>Email address<span className="input-icon"><Mail/><input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com"/></span></label><label>Password<span className="input-icon"><LockKeyhole/><input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="••••••••"/></span></label><div className="form-row"><label className="check"><input type="checkbox"/> Remember me</label><Link to="/forgot-password">Forgot password?</Link></div><button className="btn btn-primary btn-full">Sign in</button></form><p className="auth-switch">New to RentRide? <Link to="/register">Create an account</Link></p></AuthCard>;
}
export function AuthCard({title,subtitle,children}){return <div className="auth-card-wrap"><Link className="auth-brand" to="/"><span className="brand-mark"><CarFront/></span> Rent<span>Ride</span></Link><div className="auth-card"><h1>{title}</h1><p>{subtitle}</p>{children}</div></div>}
