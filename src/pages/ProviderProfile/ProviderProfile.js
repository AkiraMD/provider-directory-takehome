import { useParams } from 'react-router-dom';
import ProviderNavigation from '../../components/Providers/ProviderNavigation/ProviderNavigation';
import ProviderImage from '../../components/Providers/ProviderImage/ProviderImage';
import ProviderInfo from '../../components/Providers/ProviderInfo/ProviderInfo';
import LoadingSpinner from '../../components/UI/LoadingSpinner/LoadingSpinner';
import Error from '../../components/UI/Error/Error';
import useProvider from '../../hooks/useProvider';
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
          <ProviderImage avatarUrl={provider.avatarUrl} size="large" />
          <ProviderInfo provider={provider} />
        </div>
      </div>
    </main>
  );
};

export default ProviderProfile;
