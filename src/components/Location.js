import '../styles/Location.css';
import LocationOn from '@mui/icons-material/LocationOn';

function Location({selectedLocation, locationClick}) {
  function locationAbbr(){
      switch (selectedLocation) {
      case('Ontario'):
          return 'ON'
      case('Quebec'):
          return 'QC';
      case('Alberta'):
          return 'AB';
      default:
          return 'ON';
      }
  }

    return (
    <div className="container" onClick={() => locationClick()} >
        <div className="location">
            <LocationOn className="icon" color="primary" fontSize="13px"/>
            <label>
                {selectedLocation && locationAbbr()}
            </label>
        </div>
    </div>
    )
  }
  
  export default Location;