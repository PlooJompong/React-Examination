const Button = ({ children, size, onClick }) => {
  return (
    <button
      className={`${size} btn btn-primary text-base text-white dark:text-light-slate`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
