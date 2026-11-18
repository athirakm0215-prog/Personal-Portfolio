// src/pages/Testimonial/Testimonial.jsx
import { useState, useEffect, useRef, useCallback   } from 'react';
import './Testimonial.css';
import Pagetransition from '../../components/Pagetransition/Pagetransition';
import Glitchheading from '../../components/Glitchheading/Glitchheading';

const testimonials = [
  {
    name: 'Akshay C S',
    role: 'Mobile App Developer',
    photo: '/testimonials/01.png',
    quote:
      "I've seen her grow into a thoughtful UI/UX designer over the past year. She takes feedback well, is eager to learn, and consistently delivers clean, user-focused designs.",
  },
  {
    name: 'Akhil',
    role: 'Taxaid AI CEO(Client)',
    photo: '/testimonials/02.png',
    quote: "Athira transforms visions into exceptional designs through her deep understanding, attention to detail, and dedication. Her work consistently exceeds expectations. She doesn't just create designs; she elevates dreams!",
  },
  {
    name: 'Soorya',
    role: 'Software Tester',
    photo: '/testimonials/03.png',
    quote: "I was consistently impressed by her UI/UX skills, user-centered approach, and Figma expertise. Her ability to balance aesthetics with usability, along with her professionalism and dedication, makes her an excellent designer. I highly recommend her!",
  },
  {
    name: 'Siva',
    role: 'Developer',
    photo: '/testimonials/04.png',
    quote: "It’s been great working together! She bring creative ideas and a bold vision to the table, and her strong communication makes collaborating super smooth. Her hard work and dedication really show in every design she deliver.",
  },
  {
    name: 'Neha',
    role: 'UI UX Designer',
    photo: '/testimonials/05.jpeg',
    quote: "She was an amazing mentor who always shared her knowledge, encouraged new ideas, and inspired me to grow as a UI/UX designer. I’m truly grateful for her support, guidance, and motivation.",
  },
];

function Testimonial() {
  const total = testimonials.length;

  // Clone the last and first cards to create a continuous loop.
  const cards = [
    testimonials[total - 1],
    ...testimonials,
    testimonials[0],
  ];

  const [slideIndex, setSlideIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(true);
  const [dimensions, setDimensions] = useState({
    cardWidth: 0,
    viewportWidth: 0,
    gap: 0,
  });

  const carouselRef = useRef(null);
  const trackRef = useRef(null);
  const isMoving = useRef(false);

  const currentIndex = (slideIndex - 1 + total) % total;

  // Measure the actual card width and carousel viewport.
  const measureCarousel = useCallback(() => {
    const carousel = carouselRef.current;
    const track = trackRef.current;

    if (!carousel || !track || !track.children.length) return;

    const cardWidth = track.children[0].offsetWidth;
    const viewportWidth = carousel.clientWidth;
    const gap =
      parseFloat(window.getComputedStyle(track).columnGap) || 0;

    if (!cardWidth || !viewportWidth) return;

    setDimensions({
      cardWidth,
      viewportWidth,
      gap,
    });
  }, []);

  useEffect(() => {
    measureCarousel();

    const observer = new ResizeObserver(measureCarousel);

    if (carouselRef.current) observer.observe(carouselRef.current);
    if (trackRef.current) observer.observe(trackRef.current);

    window.addEventListener('resize', measureCarousel);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', measureCarousel);
    };
  }, [measureCarousel]);

  // Move forward automatically every 5 seconds.
useEffect(() => {
  const timer = setInterval(() => {
    if (!isMoving.current) {
      isMoving.current = true;
      setSlideIndex((index) => index + 1);
    }
  }, 5000);

  return () => clearInterval(timer);
}, []);

const goNext = () => {
  if (isMoving.current) return;

  isMoving.current = true;
  setSlideIndex((index) => index + 1);
};

const goPrev = () => {
  if (isMoving.current) return;

  isMoving.current = true;
  setSlideIndex((index) => index - 1);
};

const handleTransitionEnd = (event) => {
  if (
    event.target !== trackRef.current ||
    event.propertyName !== 'transform'
  ) {
    return;
  }

  if (slideIndex === total + 1 || slideIndex === 0) {
    const resetIndex = slideIndex === total + 1 ? 1 : total;

    setIsAnimating(false);
    setSlideIndex(resetIndex);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsAnimating(true);
        isMoving.current = false;
      });
    });

    return;
  }

  isMoving.current = false;
};

  // Calculate the offset so the active card's center matches
  // the exact center of the fixed carousel viewport.
  const step = dimensions.cardWidth + dimensions.gap;

  const offset =
    dimensions.viewportWidth / 2 -
    slideIndex * step -
    dimensions.cardWidth / 2;

  return (
    <Pagetransition>
    <section className="testimonial">
      <div className="testimonial-title">
      <span className="about-arrow">&laquo;</span>
            <Glitchheading>TESTIMONIAL</Glitchheading>
      <span className="about-arrow">&raquo;</span>
      </div>

      <div className="testimonial-carousel" ref={carouselRef}>
        <div
          className={`testimonial-track ${
            isAnimating ? 'animated' : 'no-animation'
          }`}
          ref={trackRef}
          style={{
            transform: `translate3d(${offset}px, 0, 0)`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {cards.map((item, index) => {
            const isActive = index === slideIndex;
            const isSide =
              index === slideIndex - 1 ||
              index === slideIndex + 1;

            return (
              <article
                key={`${item.name}-${index}`}
                className={`testimonial-card ${
                  isActive ? 'main-card' : ''
                } ${isSide ? 'side-card' : ''}`}
              >
                <img
                  src={item.photo}
                  alt={item.name}
                  className="testimonial-photo"
                />

                <h3 className="testimonial-name">{item.name}</h3>
                <p className="testimonial-role">{item.role}</p>

                <hr className="testimonial-divider" />

                <p className="testimonial-quote">{item.quote}</p>
              </article>
            );
          })}
        </div>
      </div>

      <div className="testimonial-nav">
        <button
          type="button"
          onClick={goPrev}
          className="testimonial-nav-btn"
          aria-label="Previous testimonial"
        >
           <img src="/icons/tree-growth.svg" alt="" className="start-icon" style={{ transform: 'rotate(-90deg)' }}/>
        
        </button>

        <span className="testimonial-counter">
          {currentIndex + 1} / {total}
        </span>

        <button
          type="button"
          onClick={goNext}
          className="testimonial-nav-btn"
          aria-label="Next testimonial"
        >
            <img src="/icons/tree-growth.svg" alt="" className="start-icon"/>
        </button>
      </div>
    </section>
    </Pagetransition>
  );
}

export default Testimonial;