import { useSelector } from 'react-redux';

const ThemeProvider = ({ children }) => {
  // Get theme from store.js
  const theme = useSelector((state) => state.theme.theme);

  return (
    // Set background and text color based on local storage
    <div
      className={`${theme} w-full ${theme ? 'bg-navy text-light-slate' : 'bg-white text-slate-700'}`}
    >
      {children}
    </div>
  );
};

export default ThemeProvider;
