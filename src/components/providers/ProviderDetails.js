import Card from '../UI/Card';
import ProviderBio from './ProviderBio';
import ProviderStatList from './ProviderStatList';
import Button from '../UI/Button';

import './ProviderDetails.scss';

const ProviderDetails = ({ provider }) => {
  return (
    <div className="profile__details">
      {/* Top Profile Section */}
      <Card>
        <h3 className="provider__name">
          {provider.name}, {provider.title}
        </h3>
        {/* Figure out where title below comes from */}
        <p className="provider__designation">Registered Social Worker</p>
        <ProviderBio bio={provider.bio} />
      </Card>
      <hr />
      {/* Bottom Profile Section */}
      <Card>
        <ProviderStatList
          location={provider.location}
          education={provider.education}
          languages={provider.languages}
        />
        <Button
          size="xLarge"
          onClick={() => console.log('Book an appointment!')}
        >
          Book with us
        </Button>
      </Card>
    </div>
  );
};

export default ProviderDetails;
