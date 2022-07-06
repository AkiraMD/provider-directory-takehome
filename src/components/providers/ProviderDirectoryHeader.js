import Navigation from '../UI/Navigation';
import Dropdown from '../UI/Dropdown';
import { getLocationOptions } from '../../helpers/formatters';
import { availableLocations } from '../../constants/locationConstants';
import LocationPin from '../../assets/icons/location-pin.png';
import './ProviderDirectoryHeader.scss';

const ProviderListHeader = ({ location, updateLocation }) => {
  const locationOptions = getLocationOptions(availableLocations);

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
            options={locationOptions}
            onChange={updateLocation}
          />
        </Navigation>
      </div>
    </header>
  );
};

export default ProviderListHeader;
