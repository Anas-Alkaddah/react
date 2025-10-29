import '../index.css';

function ContactCTA() {
    return (
        <section id="contact" className="contact-cta">
            <div className="contact-cta-content">
                <div className="contact-cta-text">
                    <h2>
                        Still Confused About Your
                        <br />
                        Career Choice? Consult With
                        <br />
                        Our Experts
                    </h2>
                    <a href="/contact" className="contact-cta-primary">Contact Us</a>
                </div>
                <div className="contact-cta-illustration" aria-hidden="true">
                    <img src="/figma/CTA.svg" alt="Consult with our experts" />
                </div>
            </div>
        </section>
    );
}

export default ContactCTA;


