const Container = ({ children }) => {
  return (
    // <main className="flex flex-col justify-center items-center p-4 min-h-screen max-w-screen-2xl bg-slate-200 my-5 text-slate-700 rounded-lg">
    <main className="my-5 flex min-h-screen max-w-screen-2xl flex-col items-center justify-center rounded-lg bg-white p-4 text-slate-700">
      {children}
    </main>
  );
};

export default Container;
