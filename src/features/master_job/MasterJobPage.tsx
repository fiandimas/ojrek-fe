import type React from "react";
import { Box, Button, Container, TextField, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Stack } from "@mui/material";
import { useMasterJob } from "./hooks/useMasterJob";
import { useCallback, useState } from "react";
import MasterJobTable from "./components/MasterJobTable";
import { Form } from "react-hook-form";
import type { Job } from "@/app/api/master_job/type";

const MasterJobPage: React.FC = () => {
  const [inputSearch, setInputSearch] = useState('');
  const [dialogStage, setDialogState] = useState<{ mode: 'create' | 'edit', job: Job | undefined;}>({ mode: 'create', job: undefined });


  const [dialog, setDialog] = useState(false);
  const { form, jobsData, isLoading, refetch, setSearch, onDelete } = useMasterJob();


  const openDialog = useCallback((mode: 'create' | 'edit', jobId: string | null) => {
    setDialogState({ mode, job: jobsData.find((e) => e.id === jobId)})
  }, []);


  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputSearch(e.target.value);
  }, []);

  const handleSearch = useCallback(() => {
    setSearch(inputSearch);
  }, [inputSearch, setSearch]);

  return (
    <>
      <Box sx={{ marginTop: 2 }}>
        <Container>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, marginTop: 2 }}>
            <TextField
              placeholder="Search by title..."
              size="small"
              fullWidth
              onChange={handleSearchChange}
            />
            <Button variant="contained" size="small" sx={{ width: 200 }} onClick={handleSearch}>
              Search
            </Button>
          </Box>

          <MasterJobTable
            isLoading={isLoading}
            jobs={jobsData}
            onAdd={() => openDialog('create', null)}
            onEdit={(id) => openDialog('edit', id)}
            onDelete={() => openDialog('create', null)}
          />
        </Container>
      </Box>

      {/* <Dialog open={open}>
        <DialogTitle>Hapus Data?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Data ini akan dihapus secara permanen dan tidak bisa dikembalikan.
            Yakin ingin melanjutkan?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog}>Batal</Button>
          <Button color="error" variant="contained" onClick={handleDelete}>
            Hapus
          </Button>
        </DialogActions>
      </Dialog> */}

      
    </>
  );
}

export default MasterJobPage;