import { useGetMyJobs } from "@/app/api/profile/useAuthProfile";
import { Box, Button, Card, CardActionArea, CardActions, CardContent, Container, Grid, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useProfile } from "./hooks/useProfile";
import RecommendedGrid from "./components/RecommendedGrid";
import RecommendedTablePagination from "./components/RecommendedTablePagination";

const RecommendedPage: React.FC = () => {
  const {
    jobs,
    setPage,
    jobCount,
    limit,
    page,
    isLoading,
  } = useProfile();

  const onClickCard = (detailUrl: string) => {
    open(detailUrl);
  }

  return (
    <Box>
      <Container sx={{ maxWidth: 'xl' }}>

        <RecommendedGrid jobs={jobs} onClickCard={onClickCard} isLoading={isLoading} />
        <RecommendedTablePagination page={page} limit={limit} onPageChange={setPage} count={jobCount} />
      </Container>
    </Box>
  );
}

export default RecommendedPage;