const Container = ({ children }) => {
  return (
    // <main className="my-5 flex min-h-screen max-w-screen-2xl flex-col items-center justify-center rounded-lg bg-slate-200 p-4 text-slate-700">
    <main className="my-5 flex min-h-screen max-w-screen-2xl flex-col items-center justify-center rounded-lg bg-white p-4 text-slate-700">
      {children}
    </main>
  );
};

export default Container;
