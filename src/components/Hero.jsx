import '../index.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Learn Any Skills to advance your career path
          </h1>
          <img
            src="/cours1.png"
            alt=""
            className="hero-underline"
          />
          <p className="hero-description">
            Want to improve your work skills? You need to study harder with the help of a great mentor to improve your performance at work.
          </p>
        </div>
        <div className="hero-media">
          <img
            src="/cours.png"
            alt="Learning illustration"
            className="hero-illustration"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;