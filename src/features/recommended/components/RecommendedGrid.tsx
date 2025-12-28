import type { Job } from "@/app/api/job/type";
import { Button, Card, CardActionArea, CardActions, CardContent, Grid, Skeleton, Typography } from "@mui/material";
import type React from "react";
import { formatDistanceToNow } from 'date-fns';

interface RecommendedGridProps {
	jobs: Job[];
  isLoading: boolean;
  onClickCard: (detail_url: string) => void;
};

const RecommendedGrid: React.FC<RecommendedGridProps> = ({ jobs, isLoading, onClickCard }) => {
  if (jobs.length === 0 && !isLoading) {
    return (
      <Typography
        variant="h6"
        align="center"
        sx={{ mt: 6, color: "text.secondary" }}
      >
        😕 No recommended jobs available
      </Typography>
    );
  }

  if (isLoading) {
    return (
      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        {Array.from({ length: 30 }).map((_, i) => (
          <Grid size={4} key={i}>
            <Card sx={{ height: 160 }}>
              <CardContent>
                <Skeleton variant="text" height={28} width="80%" />
                <Skeleton variant="text" height={20} width="60%" />
                <Skeleton variant="rectangular" height={20} sx={{ mt: 1 }} />
                <Skeleton variant="text" height={20} width="40%" sx={{ mt: 1 }} />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }

	return (
		<Grid container spacing={2} sx={{ marginTop: 2 }}>
      {jobs.map((job) => (
        <Grid size={4} key={job.id}>
          <Card sx={{ height: 160 }} key={job.id}>
            <CardActionArea onClick={() => onClickCard(job.detail_url)}>
              <CardContent>
                <Typography gutterBottom variant="h6" noWrap>{job.name}</Typography>
                <Typography variant="h6" fontSize={13} fontWeight={500} color="gray">Jobstreet</Typography>
                <Typography variant="h6" fontSize={13} fontWeight={500} color="gray">Malang</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="h6" fontSize={11} fontWeight={500} sx={{ marginLeft: 1 }}>Updated {formatDistanceToNow(new Date(job.updated_at), { addSuffix: true })}</Typography>
              <Button size="small">Share</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
	);
};

export default RecommendedGrid;
