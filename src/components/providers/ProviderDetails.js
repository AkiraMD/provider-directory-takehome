import Card from '../UI/Card';
import ProviderBio from './ProviderBio';
import ProviderStatsList from './ProviderStatsList';
import Button from '../UI/Button';
import Divider from '../UI/Divider';
import './ProviderDetails.scss';

const ProviderDetails = ({ provider }) => {
  const { name, title, designation, bio, location, education, languages } =
    provider;

  const bookAppointment = () => {
    alert('Book an appointment!');
  };

  return (
    <div className="profile__details">
      {/* Top Profile Section */}
      <Card>
        <h3 className="provider__name">
          {name}, {title}
        </h3>
        <p className="provider__designation">{designation}</p>
        <ProviderBio bio={bio} />
      </Card>
      {/* Divider */}
      <Divider />
      {/* Bottom Profile Section */}
      <Card>
        <ProviderStatsList
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

export default ProviderDetails;
