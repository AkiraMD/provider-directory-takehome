import ProviderDirectoryHeader from '../components/providers/ProviderDirectoryHeader';
import ProviderList from '../components/providers/ProviderList';
import { fetchProviders } from '../lib/api';

const ProviderDirectory = () => {
  fetchProviders().then(console.log);

  return (
    <div>
      <ProviderDirectoryHeader />
      <p>
        <span>17</span> providers in Ontario
      </p>
      <ProviderList />
    </div>
  );
};

export default ProviderDirectory;
