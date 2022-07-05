import { Link } from 'react-router-dom';
import ProviderImage from './ProviderImage';
import Label from '../UI/Label';
import './ProviderListItem.scss';

const ProviderListItem = ({ provider }) => {
  const { id, avatarUrl, name, title, designation, bio, availability } =
    provider;

  return (
    <li className="providers__item">
      <Link to={`/providers/${id}`}>
        <div className="providers__item--profile">
          <ProviderImage src={avatarUrl} size="small" />
          {/* Potential to make provider heading a component */}
          <div className="providers__item--header">
            <h3 className="providers__item--name">
              {name}, {title}
            </h3>
            <p className="providers__item--designation">{designation}</p>
          </div>
        </div>

        <div className="providers__item--bio">{bio}</div>

        <Label variant="availability">Available {availability}</Label>
      </Link>
    </li>
  );
};

export default ProviderListItem;
