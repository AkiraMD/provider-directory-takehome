import { useState } from 'react';
import arrowUp from '../../../assets/icons/arrow-up.png';
import arrowDown from '../../../assets/icons/arrow-down.png';

import './ProviderBio.scss';

const ProviderBio = ({ bio }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <div className={`provider__bio ${!readMore ? 'truncated' : ''}`}>
        {bio}
      </div>
      <span className="read-more" onClick={() => setReadMore(!readMore)}>
        {readMore ? 'Read less' : 'Read more'}
        <img src={readMore ? arrowUp : arrowDown} alt="read more arrow" />
      </span>
    </>
  );
};

export default ProviderBio;
