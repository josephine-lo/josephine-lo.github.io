import { useEffect, useRef, useState } from 'react';

const Reveal = ({ children, className = '', delay = 0 }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (motionQuery.matches) {
      setReducedMotion(true);
      setVisible(true);
      return undefined;
    }

    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const stateClass = reducedMotion
    ? 'reveal-reduced'
    : visible
      ? 'reveal-visible'
      : '';

  return (
    <div
      ref={ref}
      className={`reveal ${stateClass} ${className}`.trim()}
      style={reducedMotion ? undefined : { transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default Reveal;
