import './ProviderDirectoryHeader.scss';
import LocationPin from '../../assets/icons/location-pin.svg';

const ProviderListHeader = () => {
  return (
    <header className="directory-header">
      <div className="directory-header__container">
        <h1 className="directory-header__heading">Browse our providers</h1>
        <p className="directory-header__sub-heading">Mental Wellness</p>
        {/* TO DO: Make Badge component reusable */}
        <div className="directory-header__location">
          <img src={LocationPin} alt="location-pin" />
          <span className="directory-header__location--text">ON</span>
        </div>
      </div>
    </header>
  );
};

export default ProviderListHeader;
