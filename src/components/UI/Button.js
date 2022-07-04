import './Button.scss';

const Button = ({ size, onClick, children }) => {
  return (
    <button className={`button ${size}`} onClick={onClick}>
      {/* Variable button text by rendering children prop as text */}
      <span>{children}</span>
    </button>
  );
};

export default Button;
