import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop component
 * This component is used to scroll the page to the top of the page
 * every time the url changes. This is useful for when the user navigates
 * to a new page and they are not at the top of the page.
 *
 *
 * useLocation hook from react-router-dom to get the current URL and
 * the useEffect hook to trigger scrolling when the pathname changes
 */

const ScrollToTop = () => {
  const pathname = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};

export default ScrollToTop;
