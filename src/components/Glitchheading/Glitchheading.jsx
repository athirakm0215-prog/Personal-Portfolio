import './Glitchheading.css';

function Glitchheading({ children, className = '' }) {
  const text = typeof children === 'string' ? children : '';
  return (
    <h1 className={`glitch-heading ${className}`} data-text={text}>
      {children}
    </h1>
  );
}

export default Glitchheading;