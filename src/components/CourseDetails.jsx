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
                    <h2>لم يتم العثور على الدورة</h2>
                    <p className="courses-subtitle">تأكد من الرابط أو عُد إلى قائمة الدورات.</p>
                    <Link to="/courses" className="show-more-btn">العودة إلى الدورات</Link>
                </div>
            </section>
        );
    }

    return (
        <section className="courses">
            <div className="courses-content">
                <h2>{course.title}</h2>
                <p className="courses-subtitle">المستوى: {course.level} • التقييم: {course.rating} • الطلاب: {course.students}</p>

                <div className="course-card" style={{ padding: '1.5rem' }}>
                    <h3 style={{ margin: '0 0 1rem 0' }}>{course.title}</h3>
                    <p style={{ marginBottom: '1rem' }}>{course.description}</p>
                    <div className="course-info">
                        <div className="info-item"><span className="info-label">المدرب:</span><span className="info-value">{course.instructor}</span></div>
                        <div className="info-item"><span className="info-label">المدة:</span><span className="info-value">{course.duration}</span></div>
                        <div className="info-item"><span className="info-label">السعر:</span><span className="info-value">{course.price}</span></div>
                    </div>
                    <div className="course-footer">
                        <div className="course-price">{course.price}</div>
                        <button className="course-button">سجل الآن</button>
                    </div>
                </div>

                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                    <Link to="/courses" className="show-more-btn">العودة إلى كل الدورات</Link>
                </div>
            </div>
        </section>
    );
}

export default CourseDetails;


