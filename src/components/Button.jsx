const Button = ({ children, size }) => {
  return (
    <button className={`${size} btn btn-primary text-base text-white`}>
      {children}
    </button>
  );
};

export default Button;
