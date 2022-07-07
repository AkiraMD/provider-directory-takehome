import './ProviderDetailItem.scss';

const ProviderDetailItem = ({ icon, label, data }) => {
  return (
    <li className="provider-detail__item">
      <img src={icon} alt={`${label} icon`} />
      <div className="provider-detail__item--container">
        <p className="provider-detail__item--label">{label}</p>
        <p className="provider-detail__item--data">{data}</p>
      </div>
    </li>
  );
};

export default ProviderDetailItem;
