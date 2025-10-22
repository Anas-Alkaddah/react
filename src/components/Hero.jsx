import '../index.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>مستقبل التعلم الرقمي يبدأ هنا</h1>
        <p>
          انضم إلى أكثر من 50,000 طالب وطالبة في رحلة تعلم تقنية متطورة.
          اكتسب المهارات المطلوبة في سوق العمل مع أفضل المدربين المحترفين
          وأحدث التقنيات في البرمجة والتصميم والذكاء الاصطناعي.
        </p>
        <div className="hero-buttons">
          <a href="#courses" className="hero-button primary">
            ابدأ رحلتك الآن
          </a>
          <a href="#about" className="hero-button secondary">
            تعرف علينا أكثر
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;