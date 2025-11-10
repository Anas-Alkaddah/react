import { RiGitBranchFill } from 'react-icons/ri';
import '../index.css';

function ContactCTA() {
    return (
        <section id="contact" className="contact-cta">
            <div
                className="contact-cta-content"
                style={{
                    position: 'relative',
                }}
            >
                <div className="contact-cta-text">
                    <h2
                        style={{
                            position: 'absolute',
                            top: '70px',
                            left: '146px',
                            width: '574px',
                            height: '162px',
                            opacity: 0.8,
                            transform: 'rotate(0deg)',
                            fontFamily: 'Maven Pro',
                            fontWeight: 800,
                            fontSize: '40px',
                            lineHeight: '135%',
                            letterSpacing: '0px',
                            color: 'rgba(255, 255, 255, 1)'
                        }}
                    >
                        Still Confused About Your Career Choice? Consult With Our Experts
                    </h2>

                    <a
                        href="/contact"
                        className="contact-cta-primary"
                        style={{

                            position: 'absolute',
                            top: '267px',
                            left: '146px',
                            width: '164px',
                            height: '63px',
                            opacity: 1,
                            transform: 'rotate(0deg)',
                            borderRadius: '6px',
                            paddingTop: '22px',
                            paddingRight: '40px',
                            paddingBottom: '22px',
                            paddingLeft: '40px',

                            display: 'flex',
                            gap: '10px',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textDecoration: 'none',
                            boxSizing: 'border-box',


                            backgroundColor: 'white',
                            color: '#1A1A1A',
                            fontWeight: 700,
                            fontSize: '18px'
                        }}
                    >
                        Contact Us
                    </a>
                </div>
                <div className="contact-cta-illustration" aria-hidden="true">
                    <img
                        src="/cours2.png"
                        alt="Consult with our experts"
                        style={{
                            width: '580px',
                            height: '358px',
                            opacity: 1,
                            position: 'absolute',
                            top: '30px',
                            left: '799px',
                        }}
                    />
                </div>
            </div>
        </section>
    );
}

export default ContactCTA;