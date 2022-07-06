import { Link } from 'react-router-dom';
import ProviderImage from './ProviderImage';
import Label from '../UI/Label';
import { formatProviderHeading } from '../../helpers/utils';
import './ProviderListItem.scss';

const ProviderListItem = ({ provider }) => {
  const { id, avatarUrl, name, title, designation, bio, availability } =
    provider;

  const providerHeading = formatProviderHeading(name, title);

  return (
    <li className="providers__item">
      <Link to={`/providers/${id}`}>
        <div className="providers__item--profile">
          <ProviderImage src={avatarUrl} size="small" />
          <div className="providers__item--header">
            <h2 className="providers__item--heading">{providerHeading}</h2>
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
