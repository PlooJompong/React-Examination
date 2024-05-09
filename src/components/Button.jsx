const Button = ({ children, size, onClick, ...props }) => {
  return (
    <button
      className={`${size ? size : 'w-24'} btn btn-primary text-base text-white`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
