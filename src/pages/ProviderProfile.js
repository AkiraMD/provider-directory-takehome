import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchProvider } from '../lib/api';
import ProviderNavigation from '../components/providers/ProviderNavigation';
import ProviderImage from '../components/providers/ProviderImage';
import ProviderDetails from '../components/providers/ProviderDetails';
import './ProviderProfile.scss';

const ProviderProfile = () => {
  const [provider, setProvider] = useState([]);
  const { providerId } = useParams();

  useEffect(() => {
    fetchProvider(providerId)
      .then((result) => setProvider(result))
      .catch((error) => console.log(error));
  }, [providerId]);

  return (
    <main className="profile">
      <div className="profile__container">
        <ProviderNavigation name={provider.name} title={provider.title} />
        <div className="profile__overview">
          <ProviderImage size="large" url={provider.avatarUrl} />
          <ProviderDetails provider={provider} />
        </div>
      </div>
    </main>
  );
};

export default ProviderProfile;
