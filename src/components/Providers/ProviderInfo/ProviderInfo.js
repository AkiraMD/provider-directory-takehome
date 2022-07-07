import Card from '../../UI/Card/Card';
import ProviderBio from '../ProviderBio/ProviderBio';
import ProviderDetails from '../ProviderDetails/ProviderDetails';
import Button from '../../UI/Button/Button';
import Divider from '../../UI/Divider/Divider';
import { formatProviderHeading } from '../../../helpers/utils';
import './ProviderInfo.scss';

const ProviderInfo = ({ provider }) => {
  const { name, title, designation, bio, location, education, languages } =
    provider;

  const providerHeading = formatProviderHeading(name, title);

  const bookAppointment = () => {
    alert('Book an appointment!');
  };

  return (
    <div className="provider-info">
      {/* Top Profile Section */}
      <Card>
        <h3 className="provider-info__heading">{providerHeading}</h3>
        <p className="provider-info__designation">{designation}</p>
        <ProviderBio bio={bio} />
      </Card>
      {/* Divider */}
      <Divider />
      {/* Bottom Profile Section */}
      <Card>
        <ProviderDetails
          location={location}
          education={education}
          languages={languages}
        />
        <Button size="xLarge" onClick={bookAppointment}>
          Book with us
        </Button>
      </Card>
    </div>
  );
};

export default ProviderInfo;
