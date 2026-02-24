import type React from "react";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  IconButton,
} from "@mui/material";
import { useMemo } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import VisibilityIcon from "@mui/icons-material/Visibility";
import type { Job } from "@/app/api/master_job/type";

const PLATFORM_LABELS: Record<string, string> = {
  "95482b73-1795-44db-9ee8-6c8c264ac944": "Glints",
  "e2007454-cd87-4c54-bd62-5d31239e0d8e": "Indeed",
  "dd39ebea-48f7-4780-8e83-47f64c9b78c4": "Jobstreet",
  "87714918-5c15-42f4-a4ae-d6c6dc6fe049": "Kalibrr",
};

interface MasterJobTableProps {
  jobs: Job[];
  isLoading: boolean;
  onAdd: () => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const MasterJobTable: React.FC<MasterJobTableProps> = ({
  jobs,
  isLoading,
  onAdd,
  onEdit,
  onDelete,
}) => {
  const rows = useMemo(
    () =>
      jobs.map((e) => (
        <TableRow key={e.id}>
          <TableCell>{e.name}</TableCell>
          <TableCell>{PLATFORM_LABELS[e.platform] ?? e.platform}</TableCell>
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
            <IconButton size="small" color="warning" onClick={() => onEdit(e.id)}>
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton size="small" color="error" onClick={() => onDelete(e.id)}>
              <DeleteIcon fontSize="small" />
            </IconButton>
          </TableCell>
        </TableRow>
      )),
    [jobs, onEdit, onDelete]
  );

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
              <IconButton size="small" color="warning" onClick={onAdd}>
                Add
                <AddIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading ? (
            <TableRow>
              <TableCell colSpan={5} align="center">
                Loading...
              </TableCell>
            </TableRow>
          ) : (
            rows
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MasterJobTable;