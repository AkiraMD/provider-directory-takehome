import { useParams } from 'react-router-dom';
import { fetchProvider } from '../api';
import { useEffect, useState } from 'react';
import { ProviderCard } from './ProviderCard';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';

export const ProviderFull = () => {
  let { providerId } = useParams();

  const [provider, setProvider] = useState(null);

  useEffect(() => {
    fetchProvider(providerId).then((response) =>
      setProvider(response)
    );
  }, [providerId]);

  if (!provider)
    return (
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item xs={3}>
          <CircularProgress color="secondary" />
        </Grid>
      </Grid>
    );
  return (
    <>
      <div
        style={{
          backgroundColor: '#F6F7F7',
          height: '100vh',
        }}
      >
        <ProviderCard provider={provider} />
      </div>
    </>
  );
};
