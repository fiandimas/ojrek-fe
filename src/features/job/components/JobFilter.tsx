import { Box, Button, TextField, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";

interface JobFilterProps {
  onSearch: (search: string) => void;
}

const JobFilter: React.FC<JobFilterProps> = ({ onSearch }) => {
  const [search, setSearch] = useState<string>('');

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, marginTop: 2 }}>
        <TextField
          placeholder="Search by title..."
          size="small"
          fullWidth
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button variant="contained" size="small" sx={{ width: 200 }} onClick={() => onSearch(search)}>Search</Button>
      </Box>

      <Box sx={{ display: 'flex', marginTop: 3, gap: 2 }}>
        <ToggleButtonGroup>
          <ToggleButton value="relevance" color="primary">
            Relevance
          </ToggleButton>

          <ToggleButton value="date">
            Date
          </ToggleButton>

          <ToggleButton value="date">
            A-Z
          </ToggleButton>
        </ToggleButtonGroup>
        </Box>
    </Box>
  );
};

export default JobFilter;