import ProviderListItem from './ProviderListItem';
import { getProviderText } from '../../helpers/formatters';
import './ProviderList.scss';

const ProviderList = ({ providers, location }) => {
  const numberOfProviders = providers.length;

  const pluralizedProvidersText = getProviderText(numberOfProviders, location);

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
        <ul className="providers__list">{providersList}</ul>
      </div>
    </section>
  );
};

export default ProviderList;
