import '../index.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function CourseCard({ id, title, description, level, price, instructor, duration, students, rating, image }) {
    const [isFavorite, setIsFavorite] = useState(false);
    return (
        <div className="course-card">
            <div className="course-image">
                <span className="course-icon">{image}</span>
            </div>

            <h3>{title}</h3>
            <button
                className="favorite-button"
                aria-pressed={isFavorite}
                onClick={() => setIsFavorite(prev => !prev)}
            >
                {isFavorite ? ' مفضلة' : ' أضف للمفضلة'}
            </button>

            <p>{description}</p>

            <div className="course-meta">
                <span className={`level ${level.toLowerCase()}`}>{level}</span>
                <div className="course-rating">
                    <span className="stars">⭐⭐⭐⭐⭐</span>
                    <span className="rating-text">{rating}</span>
                </div>
            </div>

            <div className="course-info">
                <div className="info-item">
                    <span className="info-label">المدرب:</span>
                    <span className="info-value">{instructor}</span>
                </div>
                <div className="info-item">
                    <span className="info-label">المدة:</span>
                    <span className="info-value">{duration}</span>
                </div>
                <div className="info-item">
                    <span className="info-label">الطلاب:</span>
                    <span className="info-value">{students}</span>
                </div>
            </div>

            <div className="course-footer">
                <div className="course-price">{price}</div>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <button className="course-button" >
                        ابدأ الآن
                    </button>
                    <Link to={`/courses/${id}`} className="course-button" style={{ background: 'linear-gradient(135deg,#f093fb 0%,#f5576c 100%)' }}>
                        التفاصيل
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CourseCard;