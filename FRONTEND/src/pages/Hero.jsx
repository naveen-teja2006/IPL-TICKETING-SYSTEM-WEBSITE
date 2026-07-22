import { Link } from "react-router-dom";
import "../styles/Hero.css";
import HeroImage from "/images/hero_image.jpeg";
function Hero() {
  return (
   <section className="hero-section">
    <img src={HeroImage} />
    <div className="hero-content">
      <p> Book <span>IPL TICKETS</span> Online Expereince The Live Cricket And Enjoy Now</p>
      <Link to="/matches">
      <button className="hero-book-now-btn">Book Tickets Now</button>
      </Link>
    </div>
   </section>
  );
}

export default Hero;