import Navigation from '../UI/Navigation';
import Dropdown from '../UI/Dropdown';
import './ProviderDirectoryHeader.scss';
import LocationPin from '../../assets/icons/location-pin.svg';

const ProviderListHeader = ({ location, setLocation }) => {
  return (
    <header className="directory-header">
      <div className="directory-header__container">
        <h1 className="directory-header__heading">Browse our providers</h1>
        <p className="directory-header__sub-heading">Mental Wellness</p>
        <Navigation>
          {/* Location Menu Dropdown */}
          <Dropdown
            icon={LocationPin}
            defaultValue={location}
            onChange={setLocation}
          />
        </Navigation>
      </div>
    </header>
  );
};

export default ProviderListHeader;
