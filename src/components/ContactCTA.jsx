import { RiGitBranchFill } from 'react-icons/ri';
import '../index.css';

function ContactCTA() {
    return (
        <section id="contact" className="contact-cta">
            <div className="contact-cta-content">
                <div className="contact-cta-text">
                    <h2>
                        Still Confused About Your Career Choice? Consult With Our Experts
                    </h2>
                    <a
                        href="/contact"
                        className="contact-cta-primary contact-cta-button"
                    >
                        Contact Us
                    </a>
                </div>
                <div className="contact-cta-media" aria-hidden="true">
                    <img
                        src="/cours2.png"
                        alt="Consult with our experts"
                        className="contact-cta-image"
                    />
                </div>
            </div>
        </section>
    );
}

export default ContactCTA;