import '../index.css';
import { useState } from 'react';

function CourseCard({ title, description, level, price, instructor, duration, students, rating, image }) {
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
                <button className="course-button" >
                    ابدأ الآن
                </button>
            </div>
        </div>
    );
}

export default CourseCard;