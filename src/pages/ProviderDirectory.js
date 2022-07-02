import ProviderDirectoryHeader from '../components/providers/ProviderDirectoryHeader';
import { fetchProviders } from '../lib/api';

const ProviderDirectory = () => {
  fetchProviders().then(console.log);

  return (
    <div>
      <ProviderDirectoryHeader />
      <p>
        <span>17</span> providers in Ontario
      </p>
    </div>
  );
};

export default ProviderDirectory;
