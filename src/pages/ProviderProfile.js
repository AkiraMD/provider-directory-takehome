import { useParams } from 'react-router-dom';
import ProviderNavigation from '../components/providers/ProviderNavigation';
import ProviderImage from '../components/providers/ProviderImage';
import ProviderDetails from '../components/providers/ProviderDetails';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useProvider from '../hooks/useProvider';
import './ProviderProfile.scss';

const ProviderProfile = () => {
  const { providerId } = useParams();
  const { provider, loading } = useProvider(providerId);

  if (loading) {
    return <LoadingSpinner />;
  }

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
