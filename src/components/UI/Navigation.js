import './Navigation.scss';

const Navigation = ({ variant, children }) => {
  return (
    <label className="navigation">
      {/* Variable button text by rendering children prop as text */}
      {children}
    </label>
  );
};

export default Navigation;
