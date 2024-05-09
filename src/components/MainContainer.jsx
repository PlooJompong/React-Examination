const Container = ({ children }) => {
  return (
    <main className="mx-auto my-5 flex min-h-screen max-w-screen-2xl flex-col items-center justify-center rounded-lg p-4">
      {children}
    </main>
  );
};

export default Container;
