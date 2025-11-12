import '../index.css';

function About() {
    return (
        <section id="about" className="about">
            <div className="about-content">
                <div className="about-image">
                    <img
                        src="/cours3.png"
                        alt="About Us Illustration"
                        className="about-image-media"
                    />
                </div>

                <div className="about-text-container">
                    <h2 className="about-title">
                        Expand Your Knowledge: The Best Courses for Career Growth
                    </h2>
                    <p className="about-description">
                        Owlearn provides e-learning solutions for companies, universities and individual professionals. It allows users to create courses, and provides an integrated learning management system. Its offerings include digital course tools, study materials, IT infrastructure and other operations.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;