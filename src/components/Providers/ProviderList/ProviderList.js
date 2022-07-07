import ProviderListItem from '../ProviderListItem/ProviderListItem';
import { pluralizeProviders } from '../../../helpers/utils';
import './ProviderList.scss';

const ProviderList = ({ providers, location }) => {
  const numberOfProviders = providers.length;

  const pluralizedProvidersText = pluralizeProviders(
    numberOfProviders,
    location
  );

  const providersList = providers.map((provider) => {
    return <ProviderListItem key={provider.id} provider={provider} />;
  });

  return (
    <section className="providers">
      <div className="providers__container">
        <p className="providers__total">
          <span className="providers__number">{numberOfProviders}</span>{' '}
          {pluralizedProvidersText}
        </p>
        <ul>{providersList}</ul>
      </div>
    </section>
  );
};

export default ProviderList;
