
import CourseCard from "./CourseCard";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
    FaLaptopCode,
    FaGlobe,
    FaRobot,
    FaPalette,
    FaShieldAlt,
    FaMobileAlt,
    FaChartLine,
    FaChartBar
} from 'react-icons/fa';
function CoursesSection({ showMoreLink = true, limit, variant = 'grid' }) {
    // حالة البحث والفلترة والبيانات
    const [searchTerm, setSearchTerm] = useState('');
    const [activeFilter, setActiveFilter] = useState('All');
    const [courses, setCourses] = useState([]);

    // جلب البيانات من JSON
    useEffect(() => {
        let alive = true;
        fetch('/data/courses.json')
            .then(res => res.json())
            .then(data => { if (alive) setCourses(data); })
            .catch(() => setCourses([]));
        return () => { alive = false; };
    }, []);

    // 2. دالة معالجة تغيير مدخل البحث
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // 3. تطبيق منطق التصفية (Filtering Logic)
    let filteredCourses = courses.filter(course => {
        // تحويل النص إلى أحرف صغيرة لتجاهل حالة الأحرف
        const lowerCaseSearchTerm = searchTerm.toLowerCase();

        // معايير البحث: البحث في العنوان والوصف واسم المدرب والمستوى
        const titleMatch = course.title.toLowerCase().includes(lowerCaseSearchTerm);
        const descriptionMatch = course.description.toLowerCase().includes(lowerCaseSearchTerm);
        const instructorMatch = course.instructor.toLowerCase().includes(lowerCaseSearchTerm);
        const levelMatch = course.level.toLowerCase().includes(lowerCaseSearchTerm);

        const matchSearch = titleMatch || descriptionMatch || instructorMatch || levelMatch;
        const matchFilter = activeFilter === 'All' ? true : (course.category?.toLowerCase() === activeFilter.toLowerCase());
        return matchSearch && matchFilter;
    });

    if (limit) {
        filteredCourses = filteredCourses.slice(0, limit);
    }

    return (
        <section id="courses" className="courses">
            <div className="courses-content">
                <h2>دوراتنا التدريبية المتميزة</h2>
                <p className="courses-subtitle">
                    اكتشف مجموعة شاملة من الدورات المصممة بعناية لتطوير مهاراتك التقنية
                    ومساعدتك على النجاح في عالم التكنولوجيا المتطور
                </p>

                {/* أزرار الفلترة */}
                <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '16px' }}>
                    {['All', 'Web', 'Mobile', 'AI', 'Design', 'Security', 'Marketing', 'Data'].map(cat => (
                        <button key={cat} onClick={() => setActiveFilter(cat)} className={activeFilter === cat ? 'course-button' : 'favorite-button'} style={{ padding: '0.5rem 1rem' }}>{cat}</button>
                    ))}
                </div>

                <input
                    type="text"
                    placeholder="ابحث بالاسم، الوصف، المدرب، أو المستوى..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    style={{ // يمكنك استبدال هذه الأنماط بـ CSS Class
                        padding: '12px',
                        width: '100%',
                        maxWidth: '600px',
                        marginBottom: '30px',
                        marginTop: '15px',
                        borderRadius: '8px',
                        border: '1px solid #ddd',
                        fontSize: '16px',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                    }}
                />

                {/* 4. استخدام القائمة المُصفّاة (filteredCourses) للعرض */}
                {variant === 'strip' ? (
                    <div className="courses-strip">
                        {filteredCourses.length > 0 ? (
                            filteredCourses.map(course => (
                                <div key={course.id} className="strip-item">
                                    <CourseCard
                                        id={course.id}
                                        title={course.title}
                                        description={course.description}
                                        level={course.level}
                                        price={course.price}
                                        instructor={course.instructor}
                                        duration={course.duration}
                                        students={course.students}
                                        rating={course.rating}
                                        image={
                                            course.category === 'Web' ? <FaLaptopCode /> :
                                                course.category === 'AI' ? <FaRobot /> :
                                                    course.category === 'Design' ? <FaPalette /> :
                                                        course.category === 'Security' ? <FaShieldAlt /> :
                                                            course.category === 'Mobile' ? <FaMobileAlt /> :
                                                                course.category === 'Marketing' ? <FaChartLine /> :
                                                                    <FaChartBar />
                                        }
                                    />
                                </div>
                            ))
                        ) : (
                            <p style={{ textAlign: 'center', fontSize: '1.2em', color: '#888', width: '100%' }}>
                                لا توجد دورات مطابقة لـ: **{searchTerm}**
                            </p>
                        )}
                    </div>
                ) : (
                    <div className="courses-grid">
                        {filteredCourses.length > 0 ? (
                            filteredCourses.map(course => (
                                <CourseCard
                                    key={course.id}
                                    id={course.id}
                                    title={course.title}
                                    description={course.description}
                                    level={course.level}
                                    price={course.price}
                                    instructor={course.instructor}
                                    duration={course.duration}
                                    students={course.students}
                                    rating={course.rating}
                                    image={
                                        course.category === 'Web' ? <FaLaptopCode /> :
                                            course.category === 'AI' ? <FaRobot /> :
                                                course.category === 'Design' ? <FaPalette /> :
                                                    course.category === 'Security' ? <FaShieldAlt /> :
                                                        course.category === 'Mobile' ? <FaMobileAlt /> :
                                                            course.category === 'Marketing' ? <FaChartLine /> :
                                                                <FaChartBar />
                                    }
                                />
                            ))
                        ) : (
                            <p style={{ gridColumn: '1 / -1', textAlign: 'center', fontSize: '1.2em', color: '#888' }}>
                                لا توجد دورات مطابقة لـ: **{searchTerm}**
                            </p>
                        )}
                    </div>
                )}
            </div>

            {showMoreLink && (
                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                    <Link to="/courses" className="show-more-btn">عرض المزيد</Link>
                </div>
            )}
        </section>
    );
}

export default CoursesSection;