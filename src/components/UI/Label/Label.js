import './Label.scss';

const Label = ({ variant, children }) => {
  return (
    <label className={`label ${variant}`}>
      {/* Variable button text by rendering children prop as text */}
      <span>{children}</span>
    </label>
  );
};

export default Label;
