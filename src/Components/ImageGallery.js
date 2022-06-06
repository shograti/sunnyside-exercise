import React from 'react';
import './ImageGallery.css';
import cone from '../assets/images/desktop/image-gallery-cone.jpg';
import milkBottles from '../assets/images/desktop/image-gallery-milkbottles.jpg';
import orange from '../assets/images/desktop/image-gallery-orange.jpg';
import sugarCubes from '../assets/images/desktop/image-gallery-sugarcubes.jpg';
import coneMobile from '../assets/images/mobile/image-gallery-cone.jpg';
import milkBottlesMobile from '../assets/images/mobile/image-gallery-milkbottles.jpg';
import orangeMobile from '../assets/images/mobile/image-gallery-orange.jpg';
import sugarCubesMobile from '../assets/images/mobile/image-gallery-sugar-cubes.jpg';

function ImageGallery() {
  return (
    <div className="image-gallery-container">
      <div className="image-gallery-grid">
        <img src={milkBottles} alt="" />
        <img src={orange} alt="" />
        <img src={cone} alt="" />
        <img src={sugarCubes} alt="" />
      </div>
      <div className="image-gallery-grid-mobile">
        <img src={milkBottlesMobile} alt="" />
        <img src={orangeMobile} alt="" />
        <img src={coneMobile} alt="" />
        <img src={sugarCubesMobile} alt="" />
      </div>
    </div>
  );
}

export default ImageGallery;
