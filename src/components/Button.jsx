const Button = ({ children, size, onClick }) => {
  return (
    <button
      className={`${size} btn btn-primary text-base text-white`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
