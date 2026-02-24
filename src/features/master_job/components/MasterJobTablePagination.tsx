import { TablePagination } from "@mui/material";
import type React from "react";

interface MasterJobTablePaginationProps {
  page: number;
  count: number;
  limit: number;
  onPageChange: (page: number) => void;
};

const MasterJobTablePagination: React.FC<MasterJobTablePaginationProps> = ({ page, count, limit, onPageChange }) => {
	return (
    <TablePagination
      component="div"
      count={count}
      onPageChange={(_, newPage) => onPageChange(newPage)}
      rowsPerPage={limit}
      labelDisplayedRows={(e) => `Found ${e.count.toLocaleString()} result. per page ${limit}`}
      page={page}
      rowsPerPageOptions={[]}
    />
	);
};

export default MasterJobTablePagination;
