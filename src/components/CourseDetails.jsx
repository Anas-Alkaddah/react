import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../index.css';

function CourseDetails() {
    const { id } = useParams();
    const [course, setCourse] = useState(null);

    useEffect(() => {
        let alive = true;
        fetch('/data/courses.json')
            .then(res => res.json())
            .then(data => {
                if (!alive) return;
                const found = data.find(c => String(c.id) === String(id));
                setCourse(found || null);
            })
            .catch(() => setCourse(null));
        return () => { alive = false; };
    }, [id]);

    if (!course) {
        return (
            <section className="courses">
                <div className="courses-content" style={{ textAlign: 'center' }}>
                    <h2>Course Not Found</h2>
                    <p className="courses-subtitle">Check the link or return to the course catalog.</p>
                    <Link to="/courses" className="show-more-btn">Back to Courses</Link>
                </div>
            </section>
        );
    }

    return (
        <section className="courses">
            <div className="courses-content">
                <h2>{course.title}</h2>
                <p className="courses-subtitle">Level: {course.level} • Rating: {course.rating} • Students: {course.students}</p>

                <div className="course-detail-card">
                    <h3>{course.title}</h3>
                    <p>{course.description}</p>
                    <div className="course-info">
                        <div className="info-item"><span className="info-label">Instructor:</span><span className="info-value">{course.instructor}</span></div>
                        <div className="info-item"><span className="info-label">Duration:</span><span className="info-value">{course.duration}</span></div>
                        <div className="info-item"><span className="info-label">Price:</span><span className="info-value">{course.price}</span></div>
                    </div>
                    <div className="course-footer">
                        <div className="course-price">{course.price}</div>
                        <button className="course-button">Enroll Now</button>
                    </div>
                </div>

                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                    <Link to="/courses" className="show-more-btn">Back to All Courses</Link>
                </div>
            </div>
        </section>
    );
}

export default CourseDetails;


