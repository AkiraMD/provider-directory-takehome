import './ProviderImage.scss';
import DefaultAvatar from '../../assets/images/default_avatar.png';

const ProviderImage = ({ avatarUrl, size }) => {
  const avatarSource = avatarUrl ? avatarUrl : DefaultAvatar;

  return (
    <img
      className={`provider__img ${size}`}
      src={avatarSource}
      alt="provider"
    />
  );
};

export default ProviderImage;
