import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Phone, Lock } from "lucide-react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/authSlice";
import { AuthCard } from "../Login/Login";

export default function Register(){
 const [form,setForm]=useState({name:"",email:"",phone:"",password:""}); const [error,setError]=useState(""); const dispatch=useDispatch(); const navigate=useNavigate();
 const change=e=>setForm({...form,[e.target.name]:e.target.value});
 const submit=e=>{e.preventDefault(); if(Object.values(form).some(v=>!v.trim())) return setError("Please complete all fields."); if(form.password.length<6)return setError("Password must contain at least 6 characters."); dispatch(login({name:form.name,email:form.email,phone:form.phone})); navigate("/");};
 return <AuthCard title="Create your account" subtitle="Join RentRide and start booking your next drive."><form className="form-stack" onSubmit={submit}>{error&&<div className="form-error">{error}</div>}<label>Full name<span className="input-icon"><User/><input name="name" value={form.name} onChange={change} placeholder="Your name"/></span></label><label>Email address<span className="input-icon"><Mail/><input name="email" type="email" value={form.email} onChange={change} placeholder="you@example.com"/></span></label><label>Phone number<span className="input-icon"><Phone/><input name="phone" value={form.phone} onChange={change} placeholder="+91"/></span></label><label>Password<span className="input-icon"><Lock/><input name="password" type="password" value={form.password} onChange={change} placeholder="Minimum 6 characters"/></span></label><button className="btn btn-primary btn-full">Create account</button></form><p className="auth-switch">Already have an account? <Link to="/login">Sign in</Link></p></AuthCard>;
}
