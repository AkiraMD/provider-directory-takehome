import ProviderStatItem from './ProviderStatItem';
import map from '../../assets/icons/map.png';
import gradHat from '../../assets/icons/grad-hat.png';
import globe from '../../assets/icons/globe.png';

const ProviderStatList = ({ location, education, languages }) => {
  const allLanguages = () => {
    return languages && languages.length > 1 ? languages.join(', ') : languages;
  };

  return (
    <div className="ProviderStatList">
      <ProviderStatItem icon={map} label="Location" data={location} />
      <ProviderStatItem icon={gradHat} label="Education" data={education} />
      <ProviderStatItem icon={globe} label="Language" data={allLanguages()} />
    </div>
  );
};

export default ProviderStatList;
