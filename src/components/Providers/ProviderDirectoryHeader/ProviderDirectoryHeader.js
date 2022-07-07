import NavigationLabel from '../../UI/NavigationLabel/NavigationLabel';
import Dropdown from '../../UI/Dropdown/Dropdown';
import { formatLocationsForDropdown } from '../../../helpers/utils';
import { availableLocations } from '../../../constants/defaults';
import LocationPin from '../../../assets/icons/location-pin.png';
import './ProviderDirectoryHeader.scss';

const ProviderListHeader = ({ location, updateLocation }) => {
  /* Format list of available locations for Dropdown menu */
  const locationOptions = formatLocationsForDropdown(availableLocations);

  return (
    <header className="directory-header">
      <div className="directory-header__container">
        {/* Directory Headings */}
        <h1 className="directory-header__heading">Browse our providers</h1>
        <p className="directory-header__sub-heading">Mental Wellness</p>
        {/* Location Menu Dropdown */}
        <NavigationLabel>
          <Dropdown
            icon={LocationPin}
            defaultValue={location}
            options={locationOptions}
            onChange={updateLocation}
          />
        </NavigationLabel>
      </div>
    </header>
  );
};

export default ProviderListHeader;
