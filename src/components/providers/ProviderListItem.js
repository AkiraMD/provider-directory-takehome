import { Link } from 'react-router-dom';
import ProviderImage from './ProviderImage';
import Badge from '../UI/badge/Badge';
import './ProviderListItem.scss';

const ProviderListItem = ({ provider }) => {
  const { id, availability, avatarUrl, bio, name, title } = provider;

  return (
    <li className="providers__item">
      <Link to={`/provider/${id}`}>
        <div className="providers__item--profile">
          <ProviderImage src={avatarUrl} size="small" />
          {/* Potential to make provider heading a component */}
          <div className="providers__item--header">
            <h3 className="providers__item--name">
              {name}, {title}
            </h3>
            {/* Figure out where title below comes from */}
            <p className="providers__item--title">Registered Social Worker</p>
          </div>
        </div>

        <div className="providers__item--bio">{bio}</div>

        <Badge>Available {availability}</Badge>
      </Link>
    </li>
  );
};

export default ProviderListItem;
