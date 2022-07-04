import './Badge.scss';

const Badge = (props) => {
  return (
    <label className="badge">
      {/* Variable button text by rendering children prop as text */}
      <span>{props.children}</span>
    </label>
  );
};

export default Badge;
