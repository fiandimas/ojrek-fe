import type React from "react";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useMasterJob } from "./hooks/useMasterJob";
import { useCallback, useState } from "react";
import MasterJobTable from "./components/MasterJobTable";
import MasterJobForm from "./components/MasterJobForm";
import type { Job } from "@/app/api/master_job/type";
import MasterJobTablePagination from "./components/MasterJobTablePagination";

type FormDialogState = {
  open: boolean;
  mode: "create" | "edit";
  job?: Job;
};

type DeleteDialogState = {
  open: boolean;
  jobId: string | null;
};

const MasterJobPage: React.FC = () => {
  const [inputSearch, setInputSearch] = useState("");

  const [formDialog, setFormDialog] = useState<FormDialogState>({
    open: false,
    mode: "create",
    job: undefined,
  });

  const [deleteDialog, setDeleteDialog] = useState<DeleteDialogState>({
    open: false,
    jobId: null,
  });

  const { jobsData, isLoading, setSearch, onDelete, onSubmit, setSort, isCreating, isUpdating, isDeleting, page, setPage, jobCount, limit } =
    useMasterJob();

  // ── Form dialog handlers ─────────────────────────────────────────────────
  const openCreateDialog = useCallback(() => {
    setFormDialog({ open: true, mode: "create", job: undefined });
  }, []);

  const openEditDialog = useCallback(
    (id: string) => {
      const job = jobsData.find((e) => e.id === id);
      setFormDialog({ open: true, mode: "edit", job });
    },
    [jobsData]
  );

  const closeFormDialog = useCallback(() => {
    setFormDialog((prev) => ({ ...prev, open: false }));
  }, []);

  // ── Delete dialog handlers ───────────────────────────────────────────────
  const openDeleteDialog = useCallback((id: string) => {
    setDeleteDialog({ open: true, jobId: id });
  }, []);

  const closeDeleteDialog = useCallback(() => {
    setDeleteDialog({ open: false, jobId: null });
  }, []);

  const handleConfirmDelete = useCallback(async () => {
    if (!deleteDialog.jobId) return;
    await onDelete(deleteDialog.jobId);
    closeDeleteDialog();
  }, [deleteDialog.jobId, onDelete, closeDeleteDialog]);

  // ── Search ───────────────────────────────────────────────────────────────
  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputSearch(e.target.value);
  }, []);

  const handleSearch = useCallback(() => {
    setSearch(inputSearch);
  }, [inputSearch, setSearch]);

  const onSort = (col: string, sort: 'asc' | 'desc') => {
    setSort({ col, sort })
  }

  return (
    <>
      <Box sx={{ marginTop: 2 }}>
        <Container>
          <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2, marginTop: 2 }}>
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
            onAdd={openCreateDialog}
            onEdit={openEditDialog}
            onDelete={openDeleteDialog}
            onSort={onSort}
          />

          <MasterJobTablePagination page={page} limit={limit} count={jobCount} onPageChange={setPage}
          />
        </Container>
      </Box>

      {/* Create / Edit Dialog */}
      <MasterJobForm
        open={formDialog.open}
        mode={formDialog.mode}
        job={formDialog.job}
        isSubmitting={isCreating || isUpdating}
        onSubmit={onSubmit}
        onClose={closeFormDialog}
      />

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialog.open} onClose={closeDeleteDialog}>
        <DialogTitle>Delete Job?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This data will be permanently deleted and cannot be recovered. Are you sure you want to
            continue?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDeleteDialog} disabled={isDeleting}>
            Cancel
          </Button>
          <Button
            color="error"
            variant="contained"
            onClick={handleConfirmDelete}
            disabled={isDeleting}
            startIcon={isDeleting ? <CircularProgress size={16} /> : undefined}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MasterJobPage;