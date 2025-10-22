import { useState } from 'react';
import '../index.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <section id="contact" className="contact">
            <div className="contact-content">
                <h2>تواصل معنا</h2>
                <p className="contact-subtitle">
                    نحن هنا لمساعدتك. أرسل لنا رسالة وسنرد عليك في أقرب وقت ممكن.
                </p>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">الاسم الكامل</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="أدخل اسمك الكامل"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">البريد الإلكتروني</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="أدخل بريدك الإلكتروني"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="subject">الموضوع</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="ما هو موضوع رسالتك؟"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">الرسالة</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="اكتب رسالتك هنا..."
                            rows="5"
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-button">
                        إرسال الرسالة
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
