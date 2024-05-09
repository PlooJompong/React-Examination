import { useSelector } from 'react-redux';

const ThemeProvider = ({ children }) => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    // Set theme based on local storage
    <div
      className={`${theme} w-full ${theme ? 'bg-navy text-light-slate' : 'bg-white text-slate-700'}`}
    >
      {children}
    </div>
  );
};

export default ThemeProvider;
