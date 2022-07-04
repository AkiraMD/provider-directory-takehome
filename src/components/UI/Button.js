import './Button.scss';

const Button = (props) => {
  return (
    <button className="button">
      {/* Variable button text by rendering children prop as text */}
      <span>{props.children}</span>
    </button>
  );
};

export default Button;
