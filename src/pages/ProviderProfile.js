import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchProvider } from '../lib/api';

const ProviderProfile = () => {
  const [provider, setProvider] = useState([]);
  const { providerId } = useParams();

  useEffect(() => {
    fetchProvider(providerId)
      .then((result) => setProvider(result))
      .catch((error) => console.log(error));
  }, [providerId]);

  return (
    <div>
      <p>Provider ID: {provider.name}</p>
    </div>
  );
};

export default ProviderProfile;
