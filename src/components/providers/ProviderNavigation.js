import { Link } from 'react-router-dom';
import ArrowRight from '../../assets/icons/arrow-right.png';
import './ProviderNavigation.scss';

const ProviderNavigation = ({ name, title }) => {
  return (
    <nav className="profile__breadcrumb">
      <Link to="/providers" className="providers__link">
        Mental Wellness
      </Link>
      <img className="arrow-right" src={ArrowRight} alt="right arrow" />
      <span className="profile__provider">{`${name}, ${title}`}</span>
    </nav>
  );
};

export default ProviderNavigation;
