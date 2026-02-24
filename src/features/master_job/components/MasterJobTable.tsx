import type React from "react";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  TableSortLabel,
  IconButton,
} from "@mui/material";
import { useMemo, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import VisibilityIcon from "@mui/icons-material/Visibility";
import type { Job } from "@/app/api/master_job/type";
import dayjs from "dayjs";

const PLATFORM_LABELS: Record<string, string> = {
  "95482b73-1795-44db-9ee8-6c8c264ac944": "Glints",
  "e2007454-cd87-4c54-bd62-5d31239e0d8e": "Indeed",
  "dd39ebea-48f7-4780-8e83-47f64c9b78c4": "Jobstreet",
  "87714918-5c15-42f4-a4ae-d6c6dc6fe049": "Kalibrr",
};

type SortableColumn = "name" | "location" | "created_at" | "updated_at";
type SortDirection = "asc" | "desc";

interface MasterJobTableProps {
  jobs: Job[];
  isLoading: boolean;
  onAdd: () => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onSort: (col: string, sort: "asc" | "desc") => void;
}

const MasterJobTable: React.FC<MasterJobTableProps> = ({
  jobs,
  isLoading,
  onAdd,
  onEdit,
  onDelete,
  onSort,
}) => {
  const [sortColumn, setSortColumn] = useState<SortableColumn | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

  const handleSort = (column: SortableColumn) => {
    const newDirection =
      sortColumn === column && sortDirection === "asc" ? "desc" : "asc";
    setSortColumn(column);
    setSortDirection(newDirection);
    onSort(column, newDirection);
  };

  const rows = useMemo(
    () =>
      jobs.map((e) => (
        <TableRow key={e.id}>
          <TableCell>{e.name}</TableCell>
          <TableCell>{PLATFORM_LABELS[e.platform] ?? e.platform}</TableCell>
          <TableCell>{e.location}</TableCell>
          <TableCell>{dayjs(e.created_at).format("YYYY-MM-DD HH:mm:ss")}</TableCell>
          <TableCell>{dayjs(e.updated_at).format("YYYY-MM-DD HH:mm:ss")}</TableCell>
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
            <TableCell sortDirection={sortColumn === "name" ? sortDirection : false}>
              <TableSortLabel
                active={sortColumn === "name"}
                direction={sortColumn === "name" ? sortDirection : "asc"}
                onClick={() => handleSort("name")}
              >
                Job Name
              </TableSortLabel>
            </TableCell>
            <TableCell>Platform</TableCell>
            <TableCell sortDirection={sortColumn === "location" ? sortDirection : false}>
              <TableSortLabel
                active={sortColumn === "location"}
                direction={sortColumn === "location" ? sortDirection : "asc"}
                onClick={() => handleSort("location")}
              >
                Location
              </TableSortLabel>
            </TableCell>
            <TableCell sortDirection={sortColumn === "created_at" ? sortDirection : false}>
              <TableSortLabel
                active={sortColumn === "created_at"}
                direction={sortColumn === "created_at" ? sortDirection : "asc"}
                onClick={() => handleSort("created_at")}
              >
                Created At
              </TableSortLabel>
            </TableCell>
            <TableCell sortDirection={sortColumn === "updated_at" ? sortDirection : false}>
              <TableSortLabel
                active={sortColumn === "updated_at"}
                direction={sortColumn === "updated_at" ? sortDirection : "asc"}
                onClick={() => handleSort("updated_at")}
              >
                Updated At
              </TableSortLabel>
            </TableCell>
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