// src/components/GlitchImage/GlitchImage.jsx
import './Glitchimage.css';

function Glitchimage({ src, alt, className = '', mode = 'entrance' }) {
  return (
    <div className={`glitch-image glitch-image-${mode} ${className}`}>
      <img src={src} alt={alt} className="glitch-image-base" />
      <img src={src} alt="" aria-hidden="true" className="glitch-image-layer glitch-layer-red" />
      <img src={src} alt="" aria-hidden="true" className="glitch-image-layer glitch-layer-cyan" />
    </div>
  );
}

export default Glitchimage;