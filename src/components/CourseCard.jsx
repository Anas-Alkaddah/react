import '../index.css';
import { Link } from 'react-router-dom';
import { FiUsers } from 'react-icons/fi';

function CourseCard({
    id,
    title,
    description,
    dateRange,
    price,
    oldPrice,
    students,
    image,
}) {
    return (
        <article className="course-card">
            <div className="course-card-image">
                <img src={image} alt={title} />
                <span className="course-card-badge">
                    <FiUsers />
                    <span>{students}</span>
                </span>
            </div>

            <div className="course-card-body">
                <p className="course-card-date">{dateRange}</p>
                <h3 className="course-card-title">{title}</h3>
                <p className="course-card-description">{description}</p>
            </div>

            <div className="course-card-footer">
                <div className="course-card-pricing">
                    <span className="course-card-price">{price}</span>
                    <span className="course-card-old-price">{oldPrice}</span>
                </div>
                <Link to={`/courses/${id}`} className="course-card-action">
                    Show All
                </Link>
            </div>
        </article>
    );
}

export default CourseCard;