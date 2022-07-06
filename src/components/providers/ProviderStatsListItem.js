import './ProviderStatsListItem.scss';

const ProviderStatsListItem = ({ icon, label, data }) => {
  return (
    <div className="provider-stat__item">
      <img src={icon} alt={`${label} icon`} />
      <div className="provider-stat__item--container">
        <p className="provider-stat__item--label">{label}</p>
        <p className="provider-stat__item--data">{data}</p>
      </div>
    </div>
  );
};

export default ProviderStatsListItem;
