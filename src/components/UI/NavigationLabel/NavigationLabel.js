import './NavigationLabel.scss';

const NavigationLabel = ({ variant, children }) => {
  return (
    <label className="navigation">
      {/* Variable button text by rendering children prop as text */}
      {children}
    </label>
  );
};

export default NavigationLabel;
