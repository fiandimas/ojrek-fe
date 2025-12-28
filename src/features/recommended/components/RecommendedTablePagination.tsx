import { TablePagination } from "@mui/material";
import type React from "react";

interface RecommendedTablePaginationProps {
  page: number;
  count: number;
  limit: number;
  onPageChange: (page: number) => void;
};

const RecommendedTablePagination: React.FC<RecommendedTablePaginationProps> = ({ page, count, limit, onPageChange }) => {
	return (
    <TablePagination
      component="div"
      count={count}
      onPageChange={(_, newPage) => onPageChange(newPage)}
      rowsPerPage={limit}
      labelDisplayedRows={() => ""}
      page={page}
      rowsPerPageOptions={[]}
    />
	);
};

export default RecommendedTablePagination;
