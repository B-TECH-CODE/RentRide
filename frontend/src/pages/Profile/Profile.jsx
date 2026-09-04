import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/slices/authSlice";
import { UserCircle } from "lucide-react";

export default function Profile(){
 const user=useSelector(s=>s.auth.user); const dispatch=useDispatch(); const [form,setForm]=useState(user||{name:"",email:"",phone:""}); const [saved,setSaved]=useState(false);
 if(!user) return <section className="section container empty-state"><h2>Please sign in</h2></section>;
 const submit=e=>{e.preventDefault();dispatch(updateUser(form));setSaved(true);setTimeout(()=>setSaved(false),1800)};
 return <section className="section container profile-page"><div className="page-heading"><span className="eyebrow">ACCOUNT</span><h1>Profile</h1><p>Manage your personal details.</p></div><div className="profile-layout"><aside className="profile-side"><UserCircle size={70}/><h3>{user.name}</h3><span>{user.email}</span></aside><form className="profile-form form-stack" onSubmit={submit}><label>Full name<input value={form.name||""} onChange={e=>setForm({...form,name:e.target.value})}/></label><label>Email<input type="email" value={form.email||""} onChange={e=>setForm({...form,email:e.target.value})}/></label><label>Phone<input value={form.phone||""} onChange={e=>setForm({...form,phone:e.target.value})}/></label>{saved&&<div className="success-inline">Profile saved successfully.</div>}<button className="btn btn-primary">Save changes</button></form></div></section>;
}
