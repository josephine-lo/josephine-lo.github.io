import { useEffect, useState } from 'react';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

const Nav = () => {
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const observers = sections.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
      );

      observer.observe(el);
      return observer;
    });

    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (id) => {
    setMenuOpen(false);
    setActive(id);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b bg-canvas/90 backdrop-blur-sm transition-[border-color,box-shadow] duration-300 ease-editorial ${
        scrolled ? 'border-border shadow-[0_1px_0_rgba(0,0,0,0.03)]' : 'border-transparent'
      }`}
    >
      <nav
        className="relative mx-auto flex max-w-content items-center justify-between px-6 py-4 md:px-10"
        aria-label="Main navigation"
      >
        <a
          href="#top"
          className="nav-brand"
          onClick={() => setMenuOpen(false)}
        >
          Josephine Lo
        </a>

        <button
          type="button"
          className="nav-menu-btn md:hidden"
          aria-expanded={menuOpen}
          aria-controls="nav-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
            <path
              d={menuOpen ? 'M1 1l16 12M17 1L1 13' : 'M0 1h18M0 7h18M0 13h18'}
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <ul
          id="nav-menu"
          className={`nav-menu-panel flex flex-col gap-4 md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0 md:opacity-100 md:visible md:pointer-events-auto md:transform-none ${
            menuOpen ? 'open' : ''
          }`}
        >
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`nav-link ${active === id ? 'nav-link-active' : ''}`}
                onClick={() => handleNavClick(id)}
                aria-current={active === id ? 'true' : undefined}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
