import '../index.css';

function Stats() {
    const stats = [
        { number: '50,000+', label: 'طالب وطالبة' },
        { number: '200+', label: 'دورة تدريبية' },
        { number: '50+', label: 'مدرب محترف' },
        { number: '95%', label: 'معدل النجاح' }
    ];

    return (
        <section className="stats">
            <div className="stats-content">
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-item">
                            <div className="stat-number">{stat.number}</div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Stats;
