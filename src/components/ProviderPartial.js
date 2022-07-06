import {
  Card,
  Avatar,
  Chip,
  Stack,
  Typography,
  Grid,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CheckProfilePic } from '../Utils';

export const ProdiverPartial = ({ provider }) => {
  let navigate = useNavigate();
  const { id, name, title, avatarUrl, bio, availabilty } =
    provider || {};

  const openPortfolio = (id) => {
    navigate(`/provider/${id}`);
  };

  return provider ? (
    <Card
      sx={{ m: 1, cursor: 'pointer' }}
      elevation={0}
      onClick={() => openPortfolio(id)}
    >
      <Grid container sx={{ p: 2, display: 'flex' }}>
        <Grid item xs={1}>
          <Avatar
            variant="circular"
            style={{
              border: '0.1px solid lightgray',
            }}
            src={CheckProfilePic(avatarUrl, 'avatar1.jpg')}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="body2" color="text.secondary">
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ ml: 1, mt: 2 }}>
          <Typography
            color="#6E7178"
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: '2',
              WebkitBoxOrient: 'vertical',
            }}
          >
            {bio}
          </Typography>
        </Grid>
      </Grid>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ mb: 1, px: 2, py: 1, bgcolor: 'background.default' }}
      >
        <Chip
          label={`Available ${availabilty}`}
          sx={{ backgroundColor: '#EFF1FE' }}
        />
      </Stack>
    </Card>
  ) : (
    <p>Error Provider Not Found</p>
  );
};
