import { ArrowRight, ShieldCheck, Tag, Headphones } from "lucide-react";
import { Link } from "react-router-dom";
export default function Banner() {
  return <section className="promo-banner"><div><span className="eyebrow">WHY RENTRIDE?</span><h2>Drive more. Worry less.</h2><p>Verified cars, transparent pricing and support when you need it.</p><Link className="btn btn-light" to="/cars">Explore Cars <ArrowRight size={17}/></Link></div><div className="banner-perks"><span><ShieldCheck/> Verified Cars</span><span><Tag/> No Hidden Fees</span><span><Headphones/> 24/7 Support</span></div></section>;
}
