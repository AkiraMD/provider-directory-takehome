import '../styles/Profile.css';
import defaultImage from '../resource/profile.jpg';
import { Button } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import MapIcon from '@mui/icons-material/Map';
import SchoolIcon from '@mui/icons-material/School';

function ProviderProfile(props) {
    const {provider} = props
    const { 
        education,
        languages,
        location,
        bio,
        designation,
        name: providerName,
        title,
    } = provider

    function bioPresenter() {
        return bio.substring();
    }
    return (
    <div className="profile-container">
        <div className="flex">
            <img src={defaultImage} alt="profile" className="profile-image"/>
            <div className="card">
                <div className="top-card">
                    <div className="profile-header">
                        <div className="profile-name-title">
                            {providerName}, {title}
                        </div>
                    </div>
                    <div className="profile-desi">
                        {designation}
                    </div>
                    <div className="bio">
                        {bioPresenter()}
                    </div>
                </div>
                <div className="bot-card">
                    <div>
                        <p className="detail-label">Location</p>
                        <div className="detail-container">
                            <MapIcon className="detail-icon" />
                            {location}
                        </div>
                    </div>
                    <div>
                        <p className="detail-label">Education</p>
                        <div className="detail-container"> 
                            <SchoolIcon className="detail-icon" />
                            <p className="detail">{education}</p>
                        </div>
                    </div>
                    <div>
                        <p className="detail-label">Language</p>
                        <div className="detail-container"> 
                            <LanguageIcon className="detail-icon" />
                            <p className="detail">{languages}</p>
                        </div>
                    </div>
                </div>
                <Button> Book Now </Button>
            </div>
        </div>
    </div>
  );
}

export default ProviderProfile;