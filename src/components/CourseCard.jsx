import '../index.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function CourseCard({ id, title, description, level, price, instructor, duration, students, rating, image }) {
    const [isFavorite, setIsFavorite] = useState(false);
    return (
        <div
            className="course-card"
            style={{
                width: '368px',
                height: '480px',
                borderRadius: '8px',
                boxSizing: 'border-box',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid #eee',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}
        >
            <div className="course-image">
                <span className="course-icon">{image}</span>
            </div>



            <p
                style={{

                    position: 'absolute',
                    top: '322px',
                    left: '24px',
                    width: '320px',
                    height: '72px',
                    opacity: 1,
                    transform: 'rotate(0deg)',


                    fontFamily: 'Maven Pro',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '150%',
                    letterSpacing: '0px',
                    color: '#666',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                }}
            >
                {description}
            </p>

            <div className="course-meta">
                <span className={`level ${level.toLowerCase()}`}>{level}</span>
            </div>



            <div className="course-footer">
                <div className="course-price">{price}</div>
                <div style={{
                    display: 'flex', gap: '0.5rem', flexWrap: 'wrap', width: '105px',
                    height: '25px',
                }}>






                    <Link to={`/courses/${id}`} className="course-button" style={{
                        width: '110px',
                        height: '36px',
                        opacity: 1,
                        borderRadius: '8px',


                        paddingTop: '9px',
                        paddingRight: '30px',
                        paddingBottom: '9px',
                        paddingLeft: '30px',


                        borderWidth: '1px',
                        borderStyle: 'solid',
                        borderColor: '#333',


                        display: 'flex',
                        gap: '10px',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        backgroundColor: 'transparent',
                        color: '#333'
                    }}>
                        show all
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CourseCard;