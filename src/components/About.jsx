import '../index.css';

function About() {
    return (
        <section
            id="about"
            className="about"
            style={{
                opacity: 1,
                transform: 'rotate(0deg)',
                backgroundColor: '#f9f9f9',
                padding: '72px 100px',
            }}
        >
            <div
                className="about-content"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '80px',
                    maxWidth: '1240px',
                    margin: '0 auto',
                }}
            >
                <div className="about-image">
                    <img
                        src="/cours3.png"
                        alt="About Us Illustration"
                        style={{

                            width: '550px',
                            height: '440px',
                            borderRadius: '14px',
                            objectFit: 'cover',
                            display: 'block',
                        }}
                    />
                </div>


                <div
                    className="about-text-container"
                    style={{ flexShrink: 1 }}
                >
                    <h2
                        style={{
                            fontFamily: 'Maven Pro',
                            fontWeight: 700,
                            fontSize: '40px',
                            lineHeight: '150%',
                            letterSpacing: '0.4px',
                            color: '#333',
                            marginBottom: '20px',
                            padding: 0,
                        }}
                    >
                        Expand Your Knowledge: The Best Courses for Career Growth
                    </h2>
                    <p
                        style={{
                            fontFamily: 'Maven Pro',
                            fontWeight: 500,
                            fontSize: '20px',
                            lineHeight: '165%',
                            letterSpacing: '0.5px',
                            color: '#333',
                            opacity: 0.8,
                        }}
                    >
                        Owlearn provides e-learning solutions for companies, universities and individual professionals. It allows users to create courses, and provides an integrated learning management system. Its offerings include digital course tools, study materials, IT infrastructure and other operations.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;