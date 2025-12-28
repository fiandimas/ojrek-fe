import { useGetMyJobs } from "@/app/api/profile/useAuthProfile";
import { Box, Button, Card, CardActionArea, CardActions, CardContent, Container, Grid, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useProfile } from "./hooks/useProfile";

const RecommendedPage: React.FC = () => {
  const { res } = useProfile();

  return (
    <Box>
      <Container maxWidth="xl">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, marginTop: 2 }}>
          <TextField
            placeholder="Search by title..."
            size="small"
            fullWidth
          />
          <Button variant="contained" size="small" sx={{ width: 200 }}>Search</Button>
        </Box>



        <Box sx={{ display: 'flex', marginTop: 4 }}>
          <Box sx={{ background: 'red'}}>
            <Typography variant="h6">Jobs in Indonesia</Typography>
          </Box>
          <Box sx={{ width: '100%' }}>
            <Grid container spacing={2}>
              {res?.map((e) => (
                <Grid size={4}>
                  <Card sx={{ height: '100%' }}>
                    <CardActionArea sx={{ height: '100%' }} onClick={() => open(e.detail_url)}>
                      <CardContent>
                      <Typography gutterBottom variant="h6">
                        {e.name}
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ display: 'flex', justifyContent: 'space-between'}}>
                      <Typography variant="h6" fontSize={13}>2 days ago</Typography>
                      <Button size="small">Share</Button>
                    </CardActions>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default RecommendedPage;