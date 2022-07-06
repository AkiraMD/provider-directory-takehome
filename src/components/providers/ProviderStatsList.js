import ProviderStatsListItem from './ProviderStatsListItem';
import { formatLanguages } from '../../helpers/utils';
import map from '../../assets/icons/map.png';
import gradHat from '../../assets/icons/grad-hat.png';
import globe from '../../assets/icons/globe.png';

const ProviderStatsList = ({ location, education, languages }) => {
  const allLanguages = formatLanguages(languages);

  return (
    <div>
      <ProviderStatsListItem 
        icon={map} 
        label="Location" 
        data={location} 
      />
      <ProviderStatsListItem
        icon={gradHat}
        label="Education"
        data={education}
      />
      <ProviderStatsListItem
        icon={globe}
        label="Language"
        data={allLanguages}
      />
    </div>
  );
};

export default ProviderStatsList;
