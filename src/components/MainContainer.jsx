import { useSelector } from 'react-redux';

const Container = ({ children }) => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <main className={`${theme} w-full ${theme ? 'bg-navy' : 'bg-white'}`}>
      <section className="mx-auto my-5 flex min-h-screen max-w-screen-2xl flex-col items-center justify-center rounded-lg p-4 text-slate-700 dark:text-light-slate ">
        {children}
      </section>
    </main>
  );
};

export default Container;
