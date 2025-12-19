import "./LandingHero.css";
import { ArrowRight, Sparkles } from "lucide-react";

export default function LandingHero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          
          <div className="hero-badge">
            <Sparkles size={16} />
            <span>Transforming Ideas Into Reality</span>
          </div>

          <h1 className="hero-title">
            Build Your Digital Future With Us
          </h1>

          <p className="hero-description">
            We create innovative solutions that help businesses grow and succeed
            in the digital world. From concept to launch, we’re with you every
            step of the way.
          </p>

          <div className="hero-actions">
            <button className="btn-primary">
              Get Started
              <ArrowRight size={16} />
            </button>

            <button className="btn-outline">
              View Our Work
            </button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="hero-blob top"></div>
      <div className="hero-blob bottom"></div>
    </section>
  );
}
