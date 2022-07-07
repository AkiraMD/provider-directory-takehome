import ProviderDetailItem from './ProviderDetailItem';
import { formatLanguages } from '../../helpers/utils';
import map from '../../assets/icons/map.png';
import gradHat from '../../assets/icons/grad-hat.png';
import globe from '../../assets/icons/globe.png';

const ProviderDetails = ({ location, education, languages }) => {
  const allLanguages = formatLanguages(languages);

  return (
    <div>
      <ProviderDetailItem icon={map} label="Location" data={location} />
      <ProviderDetailItem icon={gradHat} label="Education" data={education} />
      <ProviderDetailItem icon={globe} label="Language" data={allLanguages} />
    </div>
  );
};

export default ProviderDetails;
