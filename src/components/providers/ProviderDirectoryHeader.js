import './ProviderDirectoryHeader.scss';
import { IoLocationSharp } from 'react-icons/io5';

const ProviderListHeader = () => {
  return (
    <header className="provider-directory-header">
      <div className="provider-directory-header__container">
        <h1 className="provider-directory-header__heading">
          Browse our providers
        </h1>
        <p className="provider-directory-header__sub-heading">
          Mental Wellness
        </p>
        <div className="provider-directory-header__location">
          <IoLocationSharp />
          <span className="provider-directory-header__location---text">ON</span>
        </div>
      </div>
    </header>
  );
};

export default ProviderListHeader;
