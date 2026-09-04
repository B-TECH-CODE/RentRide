import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { AuthCard } from "../Login/Login";

export default function ForgotPassword(){
 const [email,setEmail]=useState(""); const [sent,setSent]=useState(false);
 return <AuthCard title="Reset your password" subtitle="Enter your email and we'll help you get back into your account.">{sent?<div className="success-box"><h3>Check your inbox</h3><p>If an account exists for {email}, password reset instructions have been prepared for the next step.</p><Link to="/login" className="btn btn-dark btn-full">Back to sign in</Link></div>:<form className="form-stack" onSubmit={e=>{e.preventDefault();setSent(true)}}><label>Email address<span className="input-icon"><Mail/><input type="email" value={email} onChange={e=>setEmail(e.target.value)} required placeholder="you@example.com"/></span></label><button className="btn btn-primary btn-full">Send reset link</button><Link className="center-link" to="/login">Back to sign in</Link></form>}</AuthCard>;
}
