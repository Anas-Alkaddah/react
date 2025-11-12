import '../index.css';

function Stats() {
    const stats = [
        { number: '50,000+', label: 'Learners' },
        { number: '200+', label: 'Courses' },
        { number: '50+', label: 'Expert Mentors' },
        { number: '95%', label: 'Success Rate' }
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
