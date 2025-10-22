import '../index.css';
import { useState } from 'react';

function Testimonials() {
    const [hoveredId, setHoveredId] = useState(null);
    const [expandedId, setExpandedId] = useState(null);
    const testimonials = [
        {
            id: 1,
            text: "دورة البرمجة غيرت حياتي تماماً. الآن أعمل كمطور ويب في شركة رائدة بفضل المهارات التي اكتسبتها.",
            author: "أحمد السعيد",
            role: "مطور ويب",
            avatar: "أ"
        },
        {
            id: 2,
            text: "أفضل منصة تعليمية واجهتها. المدربون محترفون جداً والمحتوى منظم بطريقة ممتازة.",
            author: "فاطمة محمد",
            role: "مصممة UX/UI",
            avatar: "ف"
        },
        {
            id: 3,
            text: "دورة الذكاء الاصطناعي كانت رائعة. تعلمت تقنيات متقدمة ساعدتني في مشروعي النهائي.",
            author: "محمد علي",
            role: "باحث في الذكاء الاصطناعي",
            avatar: "م"
        },
        {
            id: 4,
            text: "المحتوى عملي جداً ومفيد. استطعت تطبيق ما تعلمته مباشرة في عملي.",
            author: "نورا أحمد",
            role: "مطورة تطبيقات محمولة",
            avatar: "ن"
        },
        {
            id: 5,
            text: "دعم فني ممتاز ومجتمع تعليمي رائع. أنصح الجميع بالانضمام لهذه المنصة.",
            author: "خالد عبدالله",
            role: "مطور أمن معلومات",
            avatar: "خ"
        },
        {
            id: 6,
            text: "الشهادات معتمدة ومعترف بها في سوق العمل. ساعدتني في الحصول على وظيفة أحلامي.",
            author: "سارة حسن",
            role: "محللة بيانات",
            avatar: "س"
        }
    ];

    return (
        <section id="testimonials" className="testimonials">
            <div className="testimonials-content">
                <h2>آراء طلابنا</h2>
                <p className="testimonials-subtitle">
                    اكتشف ما يقوله طلابنا عن تجربتهم معنا
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
