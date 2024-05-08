const Button = ({ children, size }) => {
  return (
    <button className={`${size} btn btn-primary text-lg text-white`}>
      {children}
    </button>
  );
};

export default Button;
