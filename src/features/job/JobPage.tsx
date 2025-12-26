import { Box, Button, Card, CardActionArea, CardActions, CardContent, Container, Grid, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const JobPage: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch('http://127.0.0.1:8080/api/v1/jobs?limit=100');
        const json = await res.json();
        setData(json.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) return <div>Loading...</div>;

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
              {data.map((e) => (
                <Grid size={4}>
                  <Card>
                    <CardActionArea onClick={() => open(e.detail_url)}>
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

export default JobPage;