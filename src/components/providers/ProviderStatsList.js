import ProviderStatsListItem from './ProviderStatsListItem';
import { getAllLanguages } from '../../helpers/formatters';
import map from '../../assets/icons/map.png';
import gradHat from '../../assets/icons/grad-hat.png';
import globe from '../../assets/icons/globe.png';

const ProviderStatsList = ({ location, education, languages }) => {
  const allLanguages = getAllLanguages(languages);

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
