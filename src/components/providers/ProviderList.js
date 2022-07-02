import ProviderListItem from './ProviderListItem';
import './ProviderList.scss';

const ProviderList = ({ providers }) => {
  // TO DO: filter providers based on location
  // TO DO: format this properly based on amount of providers
  const numberOfProviders = providers.length;

  // TO DO: dynamically load location
  const location = 'Ontario';

  const providersList = providers.map((provider) => {
    return <ProviderListItem key={provider.id} provider={provider} />;
  });

  return (
    <section className="providers">
      <div className="providers__container">
        <p className="providers__total">
          <span className="providers__number">{numberOfProviders}</span>{' '}
          providers in {location}
        </p>
        <ul className="providers__list">{providersList}</ul>
      </div>
    </section>
  );
};

export default ProviderList;
