import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import CourseCard from './CourseCard';

const COURSE_DATA = [
    {
        id: 1,
        title: 'Product Management Basic - Course',
        description:
            'Product Management Masterclass, you will learn with Sarah Johnson – Head of Product Customer Platform Gojek Indonesia.',
        dateRange: '1 – 28 July 2022',
        price: '$ 380',
        oldPrice: '$ 500',
        students: '120',
        category: 'Product Management',
        image: '/img/image1.png',
    },
    {
        id: 2,
        title: 'Front End Developer - Basic',
        description:
            'Learn modern front-end fundamentals and build responsive experiences with confidence.',
        dateRange: '1 – 28 July 2022',
        price: '$ 380',
        oldPrice: '$ 500',
        students: '120',
        category: 'Web Development',
        image: '/img/image2.png',
    },
    {
        id: 3,
        title: 'Back End Developer - Basic',
        description:
            'Build scalable backend services and APIs while mastering database integrations.',
        dateRange: '1 – 28 July 2022',
        price: '$ 380',
        oldPrice: '$ 500',
        students: '120',
        category: 'Web Development',
        image: '/img/image3.png',
    },
    {
        id: 4,
        title: 'UX Design - Brainstorming',
        description:
            'Discover collaborative frameworks to ideate, validate, and refine user-centric products.',
        dateRange: '1 – 28 July 2022',
        price: '$ 380',
        oldPrice: '$ 500',
        students: '120',
        category: 'UI/UX Design',
        image: '/img/image4.png',
    },
    {
        id: 5,
        title: 'UI Design - Sketch',
        description:
            'Translate ideas into polished interfaces with Sketch workflows and best practices.',
        dateRange: '1 – 28 July 2022',
        price: '$ 380',
        oldPrice: '$ 500',
        students: '120',
        category: 'Branding Design',
        image: '/img/image5.png',
    },
    {
        id: 6,
        title: 'Graphic Design - Fundamental Design',
        description:
            'Master layout, typography, and composition to craft memorable visual identities.',
        dateRange: '1 – 28 July 2022',
        price: '$ 380',
        oldPrice: '$ 500',
        students: '120',
        category: 'Branding Design',
        image: '/img/image6.png',
    },
];

const CATEGORY_FILTERS = [
    'All Program',
    'UI/UX Design',
    'Product Management',
    'Branding Design',
    'Mobile Development',
    'Web Development',
];

function CoursesSection({ showMoreLink = true }) {
    const [activeFilter, setActiveFilter] = useState('All Program');

    const filteredCourses = useMemo(() => {
        if (activeFilter === 'All Program') {
            return COURSE_DATA;
        }
        return COURSE_DATA.filter((course) => course.category === activeFilter);
    }, [activeFilter]);

    return (
        <section id="courses" className="courses courses-modern">
            <div className="courses-content">
                <div className="courses-section-header">
                    <div>
                        <h2 className="courses-heading">Discover Course & Bootcamp</h2>
                    </div>
                    <Link to="/courses" className="courses-view-all">
                        Show All
                    </Link>
                </div>

                <div className="courses-filters">
                    {CATEGORY_FILTERS.map((category) => (
                        <button
                            key={category}
                            type="button"
                            onClick={() => setActiveFilter(category)}
                            className={`courses-filter-button ${activeFilter === category ? 'is-active' : ''
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="courses-grid modern">
                    {filteredCourses.map((course) => (
                        <CourseCard
                            key={course.id}
                            id={course.id}
                            title={course.title}
                            description={course.description}
                            dateRange={course.dateRange}
                            price={course.price}
                            oldPrice={course.oldPrice}
                            students={course.students}
                            image={course.image}
                        />
                    ))}
                </div>
            </div>

            {showMoreLink && (
                <div className="courses-bottom-cta">
                    <Link to="/courses" className="show-more-btn">
                        View All Courses
                    </Link>
                </div>
            )}
        </section>
    );
}

export default CoursesSection;

