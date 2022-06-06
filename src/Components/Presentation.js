import React from 'react';
import './Presentation.css';
import egg from '../assets/images/desktop/image-transform.jpg';
import glass from '../assets/images/desktop/image-stand-out.jpg';

function Presentation() {
  return (
    <div className="presentation-container" id="presentation">
      <div className="presentation__text-card">
        <h2 className="presenation__text-card-title">Transform your brand</h2>
        <p className="presentation__text-card-text-content">
          We are a full-service creative agency speciailizing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <p className="presentation__text-card-button">Learn more</p>
      </div>
      <div className="presentation__img-card">
        <img src={egg} alt="" />
      </div>

      <div className="presentation__img-card">
        <img src={glass} alt="" />
      </div>
      <div className="presentation__text-card">
        <h2 className="presenation__text-card-title">
          Stand out to the right audience
        </h2>
        <p className="presentation__text-card-text-content">
          Using a collaborative formula of designers, reasearchers,
          photographer, videographers and copywritters, we'll build and extend
          your brand in digital places.
        </p>
        <p className="presentation__text-card-button-red">Learn more</p>
      </div>

      <div className="presentation__background-card-graphic-design">
        <h2 className="presentation__background-card-title">Graphic Design</h2>
        <p className="presentation__background-card-text-content">
          Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients' attention.
        </p>
      </div>
      <div className="presentation__background-card-photography">
        <h2 className="presentation__background-card-title">Photography</h2>
        <p className="presentation__background-card-text-content">
          Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image
        </p>
      </div>
    </div>
  );
}

export default Presentation;
