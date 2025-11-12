import '../index.css';
import { useState } from 'react';

function Testimonials() {
    const [hoveredId, setHoveredId] = useState(null);
    const [expandedId, setExpandedId] = useState(null);
    const testimonials = [
        {
            id: 1,
            text: "The programming bootcamp completely changed my career path. I am now a web developer at a leading company thanks to the skills I gained.",
            author: "Ahmed Al Saeed",
            role: "Web Developer",
            avatar: "A"
        },
        {
            id: 2,
            text: "This is the best learning platform I have tried. The mentors are highly professional and the content is organized beautifully.",
            author: "Fatima Mohamed",
            role: "UX/UI Designer",
            avatar: "F"
        },
        {
            id: 3,
            text: "The AI course was outstanding. I learned advanced techniques that helped me complete my capstone project.",
            author: "Mohamed Ali",
            role: "AI Researcher",
            avatar: "M"
        },
        {
            id: 4,
            text: "The lessons are hands-on and useful. I applied what I learned immediately in my job.",
            author: "Nora Ahmed",
            role: "Mobile App Developer",
            avatar: "N"
        },
        {
            id: 5,
            text: "Excellent support and an inspiring learning community. I recommend this platform to everyone.",
            author: "Khalid Abdullah",
            role: "Cybersecurity Engineer",
            avatar: "K"
        },
        {
            id: 6,
            text: "The certifications are recognized in the job market. They helped me land my dream role.",
            author: "Sara Hassan",
            role: "Data Analyst",
            avatar: "S"
        }
    ];

    return (
        <section id="testimonials" className="testimonials">
            <div className="testimonials-content">
                <h2>What Our Learners Say</h2>
                <p className="testimonials-subtitle">
                    Discover how our students describe their experience with TechEdu.
                </p>
                <div className="testimonials-grid">
                    {testimonials.map(testimonial => (
                        <div
                            key={testimonial.id}
                            className="testimonial-card"
                            onMouseEnter={() => setHoveredId(testimonial.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            style={{
                                backgroundColor: hoveredId === testimonial.id ? '#f9fbff' : 'white',
                                transition: 'background-color 0.2s ease'
                            }}
                        >
                            <p className="testimonial-text">
                                "{expandedId === testimonial.id
                                    ? testimonial.text
                                    : (testimonial.text.length > 100
                                        ? `${testimonial.text.slice(0, 100)}...`
                                        : testimonial.text)}"
                            </p>
                            <div className="testimonial-author">
                                <div className="author-avatar">{testimonial.avatar}</div>
                                <div className="author-info">
                                    <h4>{testimonial.author}</h4>
                                    <p>{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
