import Card from '../UI/Card';
import ProviderBio from './ProviderBio';
import ProviderStatList from './ProviderStatList';
import Button from '../UI/Button';

import './ProviderDetails.scss';

const ProviderDetails = ({ provider }) => {
  const { name, title, designation, bio, location, education, languages } =
    provider;

  const bookAppointment = () => {
    console.log('Book an appointment!');
  };

  return (
    <div className="profile__details">
      {/* Top Profile Section */}
      <Card>
        <h3 className="provider__name">
          {name}, {title}
        </h3>
        {/* Figure out where title below comes from */}
        <p className="provider__designation">{designation}</p>
        <ProviderBio bio={bio} />
      </Card>
      <hr />
      {/* Bottom Profile Section */}
      <Card>
        <ProviderStatList
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
