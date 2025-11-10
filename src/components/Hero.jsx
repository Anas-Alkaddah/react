import '../index.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div
        className="hero-content"
        style={{
          paddingLeft: '752px',
          paddingBottom: '65px',
          paddingRight: '88px',
          paddingTop: '132px',
          position: 'relative',
        }}
      >

        <h1
          style={{
            position: 'absolute',
            top: '190px',
            left: '100px',
            width: '557px',
            height: '276px',
            opacity: 1,
            transform: 'rotate(0deg)',
            fontFamily: 'Maven Pro',
            fontWeight: 800,
            fontSize: '68px',
            lineHeight: '135%',
            letterSpacing: '0px',
            textTransform: 'capitalize',
            display: 'block',
            whiteSpace: 'normal',
            color: '#333'
          }}
        >
          Learn Any Skills to advance your career path
        </h1>


        <p
          style={{
            position: 'absolute',
            top: '526px',
            left: '100px',
            width: '532px',
            height: '99px',
            opacity: 0.8,
            transform: 'rotate(0deg)',
            fontFamily: 'Maven Pro',
            fontWeight: 500,
            fontSize: '20px',
            lineHeight: '165%',
            letterSpacing: '0.5px',
            color: '#333'
          }}
        >
          Want to improve your work skills? You need to study harder with the help of a great mentor to improve your performance at work
        </p>

        <img
          src="/cours1.png"
          alt="Courses Graphic Element"
          style={{

            position: 'absolute',
            top: '466.43px',
            left: '102.5px',
            width: '393.5px',
            height: '14.7px',

            opacity: 1,
            transform: 'rotate(0deg)',
            borderWidth: '5px',
            borderColor: 'hsla(36, 90%, 81%, 1)',
            boxSizing: 'border-box',
            display: 'block'
          }}
        />
        <img
          src="/cours.png"
          alt="Courses"
          style={{
            width: '600px',
            height: '600px',
            objectFit: 'cover',
            display: 'block'
          }}
        />
      </div>
    </section>
  );
}

export default Hero;