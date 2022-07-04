import { useState } from 'react';
import './ProviderBio.scss';

const ProviderBio = ({ bio }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <div className={`provider__bio ${!readMore ? 'truncated' : ''}`}>
        {bio}
      </div>
      <span className="read-more" onClick={() => setReadMore(!readMore)}>
        {readMore ? 'Read less ▴' : 'Read more ▾'}
      </span>
    </>
  );
};

export default ProviderBio;
