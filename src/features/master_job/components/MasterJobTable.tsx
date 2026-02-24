import type React from "react";
import { TableContainer, Paper, Table, TableHead, TableCell, TableBody, TableRow, IconButton, Button } from "@mui/material";
import { useMemo } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import VisibilityIcon from "@mui/icons-material/Visibility";
import type { Job } from "@/app/api/master_job/type";

interface MasterJobTableProps {
  jobs: Job[];
  isLoading: boolean;
  onAdd: () => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
};

const MasterJobTable: React.FC<MasterJobTableProps> = ({ jobs, isLoading, onEdit, onDelete }) => {
  const rows = useMemo(() => jobs.map((e) => (
    <TableRow key={e.id}>
      <TableCell>{e.name}</TableCell>
      <TableCell>{e.platform}</TableCell>
      <TableCell>{e.location}</TableCell>
      <TableCell>{e.updated_at}</TableCell>
      <TableCell>
        <IconButton
          size="small"
          color="inherit"
          onClick={() => window.open(e.detail_url)}
        >
          <VisibilityIcon fontSize="small" />
        </IconButton>
        <IconButton
          size="small"
          color="warning"
          onClick={() => onEdit(e.id)}
        >
          <EditIcon fontSize="small" />
        </IconButton>
        <IconButton
          size="small"
          color="error"
          onClick={() => onDelete(e.id)}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      </TableCell>
    </TableRow>
  )), [jobs, onEdit, onDelete]);

  return (
    <TableContainer component={Paper} sx={{ marginTop: 2 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Job Name</TableCell>
            <TableCell>Platform</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Updated At</TableCell>
            <TableCell>
              <IconButton
                size="small"
                color="warning"
              >
                Add
                <AddIcon/>
              </IconButton>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading ? (
            <TableRow>
              <TableCell colSpan={5} align="center">Loading...</TableCell>
            </TableRow>
          ) : rows}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MasterJobTable;