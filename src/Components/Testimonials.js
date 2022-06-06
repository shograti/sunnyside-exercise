import React from 'react';
import './Testimonials.css';
import emilyImg from '../assets/images/image-emily.jpg';
import thomasImg from '../assets/images/image-thomas.jpg';
import jennieImg from '../assets/images/image-jennie.jpg';

function Testimonials() {
  return (
    <div className="testimonials-container">
      <h2 className="testimonials-title">Client testimonials</h2>
      <div className="testimonials-grid">
        <div className="testimonial__card">
          <img src={emilyImg} alt="" />
          <p className="testimonial__text-content">
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <h3 className="testimonial__people-name">Emily R.</h3>
          <p className="testimonial__people-job">Marketing Director</p>
        </div>
        <div className="testimonial__card">
          <img src={thomasImg} alt="" />
          <p className="testimonial__text-content">
            Sunnyside's enthusiasm coupled with their keen interest in our
            brand's success made it a satisfying and enjoyable experience.
          </p>
          <h3 className="testimonial__people-name">Thomas S.</h3>
          <p className="testimonial__people-job">Chief Operating Officer</p>
        </div>
        <div className="testimonial__card">
          <img src={jennieImg} alt="" />
          <p className="testimonial__text-content">
            Incredible and result ! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended !
          </p>
          <h3 className="testimonial__people-name">Jennie F.</h3>
          <p className="testimonial__people-job">Business Owner</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
