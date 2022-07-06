import { useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {
  Fab,
  Divider,
  Container,
  Typography,
  Box,
} from '@mui/material';
import { ProdiverPartial } from './ProviderPartial';

export const ProviderList = ({ providers }) => {
  const [filter, setFilter] = useState('Canada');

  const filterProviders = () => {
    if (filter === 'Canada') return providers;

    return providers.filter((provider) =>
      provider.location.includes(filter)
    );
  };

  const handleFilterClick = (filterVal) => {
    setFilter(filter === filterVal ? 'Canada' : filterVal);
  };

  return (
    <>
      <Container maxWidth="md" sx={{ p: 4 }}>
        <Box sx={{ ml: 5 }}>
          <h2>Browse our providers</h2>
          <p>Mental Wellness</p>
          <Fab
            variant="extended"
            sx={{ backgroundColor: 'white' }}
            fontSize="small"
            onClick={() => handleFilterClick('Ontario')}
          >
            <LocationOnIcon sx={{ color: '#6277F0', fontSize: 21 }} />
            ON
          </Fab>
        </Box>
      </Container>

      <Divider sx={{ borderBottomWidth: 3 }} />

      <div
        style={{
          backgroundColor: '#F6F7F7',
          height: '100vh',
        }}
      >
        <Container maxWidth="md">
          <Typography sx={{ p: 2 }}>
            <Box component="span" fontWeight="fontWeightMedium">
              {filterProviders().length}
            </Box>{' '}
            providers in {filter}
          </Typography>

          {filterProviders().map((provider) => (
            <ProdiverPartial key={provider.id} provider={provider} />
          ))}
        </Container>
      </div>
    </>
  );
};
