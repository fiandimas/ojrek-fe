import TopBar from "@/shared/components/TopBar";
import { AppBar, Box, Button, Container, Menu, TextField, Toolbar, Typography } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';

const HomePage: React.FC = () => {
  return (
    <Box>
      <TopBar />

      <Box sx={{ justifyItems: 'center', marginTop: 4 }}>
        <Typography
          variant="h6"
        >
          Find 10,000+ jobs in Indonesia
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, marginTop: 2 }}>
          <TextField
            placeholder="Search by title..."
            size="small"
          />
          <Button variant="contained" size="small">Search</Button>
        </Box>
      </Box>
    </Box>
  );
}

export default HomePage;