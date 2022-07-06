import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Fab, Divider, Container } from '@mui/material';

export const ProvinceButton = ({ provinceInfo }) => {
  const { code, description, term } = provinceInfo || {};

  return provinceInfo ? (
    <Fab variant="extended" fontSize="small" color="secondary">
      <LocationOnIcon size="small" /> {term}
    </Fab>
  ) : (
    <p></p>
  );
};
