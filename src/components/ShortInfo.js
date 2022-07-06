import { Grid, Typography } from '@mui/material';

export const ShortInfo = ({ icon, name, info }) => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={0.5} sx={{ m: 1 }}>
        {icon}
      </Grid>
      <Grid item>
        <Typography>{name}</Typography>

        <Typography style={{ fontWeight: 600 }}>{info}</Typography>
      </Grid>
    </Grid>
  );
};
