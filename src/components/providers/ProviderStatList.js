import ProviderStatItem from './ProviderStatItem';
import map from '../../assets/icons/map.svg';
import hat from '../../assets/icons/hat.svg';
import globe from '../../assets/icons/globe.svg';

const ProviderStatList = ({ location, education, languages }) => {
  const allLanguages = () => {
    return languages && languages.length > 1 ? languages.join(', ') : languages;
  };

  return (
    <div className="ProviderStatList">
      <ProviderStatItem icon={map} label="Location" data={location} />
      <ProviderStatItem icon={hat} label="Education" data={education} />
      <ProviderStatItem icon={globe} label="Language" data={allLanguages()} />
    </div>
  );
};

export default ProviderStatList;
