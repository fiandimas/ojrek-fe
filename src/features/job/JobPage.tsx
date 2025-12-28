import { Box,  Container } from "@mui/material";
import JobGrid from "./components/JobGrid";
import { useJob } from "./hooks/useJob";
import JobFilter from "./components/JobFilter";
import JobTablePagination from "./components/JobTablePagination";

const JobPage: React.FC = () => {
  const {
    page,
    limit,
    jobs,
    jobCount,
    isLoading,

    setPage,
    setSearch
  } = useJob();

  const onClickCard = (detailUrl: string) => {
    open(detailUrl);
  }

  const onSearch = (search: string) => {
    setPage(0);
    setSearch(search);
  }

  return (
    <Box>
      <Container sx={{ maxWidth: 'xl' }}>
        <JobFilter onSearch={onSearch} />

        <JobGrid jobs={jobs} onClickCard={onClickCard} isLoading={isLoading} />

        <JobTablePagination page={page} limit={limit} count={jobCount} onPageChange={setPage} />
      </Container>
    </Box>
  );
}

export default JobPage;