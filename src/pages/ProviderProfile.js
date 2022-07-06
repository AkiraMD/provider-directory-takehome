import { useParams } from 'react-router-dom';
import ProviderNavigation from '../components/providers/ProviderNavigation';
import ProviderImage from '../components/providers/ProviderImage';
import ProviderInfo from '../components/providers/ProviderInfo';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import Error from '../components/UI/Error';
import useProvider from '../hooks/useProvider';
import './ProviderProfile.scss';

const ProviderProfile = () => {
  const { providerId } = useParams();
  const { provider, loading, error } = useProvider(providerId);

  /* Loading State */
  if (loading) {
    return <LoadingSpinner />;
  }

  /* Error State */
  if (error) {
    return <Error message={error} />;
  }

  return (
    <main className="profile">
      <div className="profile__container">
        <ProviderNavigation name={provider.name} title={provider.title} />
        <div className="profile__overview">
          <ProviderImage size="large" url={provider.avatarUrl} />
          <ProviderInfo provider={provider} />
        </div>
      </div>
    </main>
  );
};

export default ProviderProfile;
