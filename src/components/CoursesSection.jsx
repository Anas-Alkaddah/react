
import CourseCard from "./CourseCard";
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
import { useState } from 'react'; // تم استيراده بالفعل

function CoursesSection() {
    // 1. تعريف حالة البحث (Search State)
    const [searchTerm, setSearchTerm] = useState('');

    const courses = [
        {
            id: 1,
            title: 'أساسيات البرمجة للمبتدئين',
            description: 'تعلم أساسيات البرمجة من الصفر مع أفضل الممارسات والتقنيات الحديثة. ستبدأ من المفاهيم الأساسية وتصل إلى بناء مشاريع حقيقية.',
            level: 'Junior',
            price: '299 ر.س',
            instructor: 'أحمد محمد',
            duration: '8 أسابيع',
            students: '1,250',
            rating: '4.9',
            image: <FaLaptopCode />
        },
        {
            id: 2,
            title: 'تطوير تطبيقات الويب المتقدمة',
            description: 'احترف تطوير التطبيقات باستخدام React و Node.js مع أفضل الأدوات والمكتبات الحديثة. تعلم بناء تطبيقات كاملة الميزات.',
            level: 'Middle',
            price: '599 ر.س',
            instructor: 'سارة أحمد',
            duration: '12 أسبوع',
            students: '890',
            rating: '4.8',
            image: <FaGlobe />
        },
        {
            id: 3,
            title: 'الذكاء الاصطناعي والتعلم الآلي',
            description: 'دخول عالم الذكاء الاصطناعي مع Python و TensorFlow. تعلم بناء نماذج ذكية وحلول مبتكرة للمشاكل المعقدة.',
            level: 'Advanced',
            price: '899 ر.س',
            instructor: 'د. محمد علي',
            duration: '16 أسبوع',
            students: '456',
            rating: '4.9',
            image: <FaRobot />
        },
        {
            id: 4,
            title: 'تصميم تجربة المستخدم UX/UI',
            description: 'تعلم تصميم واجهات المستخدم وتجربة المستخدم الاحترافية. أتقن أدوات التصميم الحديثة وأساليب التفكير التصميمي.',
            level: 'Junior',
            price: '399 ر.س',
            instructor: 'فاطمة حسن',
            duration: '10 أسابيع',
            students: '1,100',
            rating: '4.7',
            image: <FaPalette />
        },
        {
            id: 5,
            title: 'أمن المعلومات والهاكر الأخلاقي',
            description: 'احترف أمن المعلومات والحماية من الهجمات السيبرانية. تعلم تقنيات الأمان المتقدمة وأساليب الحماية الحديثة.',
            level: 'Middle',
            price: '699 ر.س',
            instructor: 'خالد عبدالله',
            duration: '14 أسبوع',
            students: '678',
            rating: '4.8',
            image: <FaShieldAlt />
        },
        {
            id: 6,
            title: 'تطوير تطبيقات الهاتف المحمول',
            description: 'أنشئ تطبيقات iOS و Android باستخدام Flutter و React Native. تعلم بناء تطبيقات متعددة المنصات بكفاءة عالية.',
            level: 'Middle',
            price: '549 ر.س',
            instructor: 'نورا السعيد',
            duration: '12 أسبوع',
            students: '823',
            rating: '4.6',
            image: <FaMobileAlt />
        },
        {
            id: 7,
            title: 'التسويق الرقمي المتقدم',
            description: 'احترف التسويق الرقمي ووسائل التواصل الاجتماعي. تعلم استراتيجيات التسويق الحديثة وأدوات التحليل المتطورة.',
            level: 'Junior',
            price: '349 ر.س',
            instructor: 'عبدالرحمن محمد',
            duration: '8 أسابيع',
            students: '1,450',
            rating: '4.5',
            image: <FaChartLine />
        },
        {
            id: 8,
            title: 'علوم البيانات والتحليل',
            description: 'احترف تحليل البيانات والإحصائيات مع Python و R. تعلم استخراج الرؤى القيمة من البيانات المعقدة.',
            level: 'Advanced',
            price: '799 ر.س',
            instructor: 'د. لينا أحمد',
            duration: '18 أسبوع',
            students: '567',
            rating: '4.9',
            image: <FaChartBar />
        },
    ];

    // 2. دالة معالجة تغيير مدخل البحث
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // 3. تطبيق منطق التصفية (Filtering Logic)
    const filteredCourses = courses.filter(course => {
        // تحويل النص إلى أحرف صغيرة لتجاهل حالة الأحرف
        const lowerCaseSearchTerm = searchTerm.toLowerCase();

        // معايير البحث: البحث في العنوان والوصف واسم المدرب والمستوى
        const titleMatch = course.title.toLowerCase().includes(lowerCaseSearchTerm);
        const descriptionMatch = course.description.toLowerCase().includes(lowerCaseSearchTerm);
        const instructorMatch = course.instructor.toLowerCase().includes(lowerCaseSearchTerm);
        const levelMatch = course.level.toLowerCase().includes(lowerCaseSearchTerm);

        // إرجاع العنصر إذا كان مطابقًا في أي من الحقول المذكورة
        return titleMatch || descriptionMatch || instructorMatch || levelMatch;
    });

    return (
        <section id="courses" className="courses">
            <div className="courses-content">
                <h2>دوراتنا التدريبية المتميزة</h2>
                <p className="courses-subtitle">
                    اكتشف مجموعة شاملة من الدورات المصممة بعناية لتطوير مهاراتك التقنية
                    ومساعدتك على النجاح في عالم التكنولوجيا المتطور
                </p>


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
                <div className="courses-grid">
                    {filteredCourses.length > 0 ? (
                        filteredCourses.map(course => (
                            <CourseCard
                                key={course.id}
                                title={course.title}
                                description={course.description}
                                level={course.level}
                                price={course.price}
                                instructor={course.instructor}
                                duration={course.duration}
                                students={course.students}
                                rating={course.rating}
                                image={course.image}
                            />
                        ))
                    ) : (
                        // رسالة في حال عدم وجود نتائج
                        <p style={{ gridColumn: '1 / -1', textAlign: 'center', fontSize: '1.2em', color: '#888' }}>
                            لا توجد دورات مطابقة لـ: **{searchTerm}**
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}

export default CoursesSection;