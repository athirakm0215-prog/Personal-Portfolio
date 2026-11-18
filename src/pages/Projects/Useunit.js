import { useEffect, useState } from 'react';

const calc = () => Math.min(window.innerWidth / 1920, window.innerHeight / 1080);

export default function useUnit() {
  const [u, setU] = useState(calc);

  useEffect(() => {
    const onResize = () => setU(calc());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return u;
}