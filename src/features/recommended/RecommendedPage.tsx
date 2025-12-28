import { Box, Container, Typography } from "@mui/material";
import { useProfile } from "./hooks/useProfile";
import RecommendedGrid from "./components/RecommendedGrid";
import RecommendedTablePagination from "./components/RecommendedTablePagination";
import { useAuth } from "@/app/contexts/AuthContext";

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

  const auth = useAuth();

  return (
    <Box>
      <Container sx={{ maxWidth: 'xl' }}>
        <Typography variant="h6" sx={{ marginTop: 2 }}>Recommended jobs for {auth.user?.profession}</Typography>
        <RecommendedGrid jobs={jobs} onClickCard={onClickCard} isLoading={isLoading} />
        <RecommendedTablePagination page={page} limit={limit} onPageChange={setPage} count={jobCount} />
      </Container>
    </Box>
  );
}

export default RecommendedPage;