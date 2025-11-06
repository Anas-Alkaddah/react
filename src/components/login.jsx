import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaEnvelope, FaLock, FaUser, FaGoogle, FaFacebook } from 'react-icons/fa';
import '../index.css';
import useUser from '../hooks/useUser';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { login } = useUser();
    const navigate = useNavigate();
    const location = useLocation();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.email.trim()) {
            newErrors.email = 'البريد الإلكتروني مطلوب';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'البريد الإلكتروني غير صحيح';
        }

        if (!formData.password) {
            newErrors.password = 'كلمة المرور مطلوبة';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            setIsSubmitting(true);
            try {
                await login({ email: formData.email });
                setFormData({ email: '', password: '' });
                const redirectTo = location.state?.from?.pathname || '/';
                navigate(redirectTo, { replace: true });
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>تسجيل الدخول</h2>
                <p className="login-subtitle">مرحباً بك مرة أخرى</p>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">البريد الإلكتروني</label>
                        <div className="input-wrapper">
                            <FaEnvelope className="input-icon" />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={errors.email ? 'error' : ''}
                                placeholder="أدخل بريدك الإلكتروني"
                            />
                        </div>
                        {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">كلمة المرور</label>
                        <div className="input-wrapper">
                            <FaLock className="input-icon" />
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className={errors.password ? 'error' : ''}
                                placeholder="أدخل كلمة المرور"
                            />
                        </div>
                        {errors.password && <span className="error-message">{errors.password}</span>}
                    </div>



                    <button
                        type="submit"
                        className="login-button"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول'}
                    </button>
                </form>

                <div className="login-footer">
                    <p>ليس لديك حساب؟ <Link to="/signup">إنشاء حساب جديد</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Login;