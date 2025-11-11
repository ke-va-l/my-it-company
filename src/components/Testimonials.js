import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechGrowth Inc.',
      text: 'TechNova transformed our online presence. Their team delivered beyond our expectations.',
      avatar: '👩'
    },
    {
      name: 'Michael Chen',
      company: 'Innovate Solutions',
      text: 'Professional, timely, and innovative. The perfect partner for our digital transformation.',
      avatar: '👨'
    },
    {
      name: 'Emily Davis',
      company: 'Global Retail',
      text: 'Outstanding mobile app development. Our users love the smooth experience.',
      avatar: '👩‍💼'
    }
  ];

  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <div className="section-title">
          <h2>What Our Clients Say</h2>
          <p>Don't just take our word for it. Here's what our clients have to say about working with us.</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-content">
                <p>"{testimonial.text}"</p>
              </div>
              <div className="testimonial-author">
                <div className="avatar">{testimonial.avatar}</div>
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;