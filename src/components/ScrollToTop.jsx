import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Make sure that the user is scrolled to the top of the page
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};

export default ScrollToTop;
