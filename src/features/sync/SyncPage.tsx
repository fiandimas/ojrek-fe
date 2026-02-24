import type React from "react";
import { Box, Card, CardContent, Typography, Chip, Button, Stack, Container } from "@mui/material";
import { formatDistanceToNow } from 'date-fns';
import { useSyncPage } from "./hooks/useSyncPage";

const SyncPage: React.FC = () => {
  const { lastSync, onSubmit, isLoading } = useSyncPage();
  
  const getChip = (status: '-' | 'success' | 'running' | 'failed'): 'success' | 'error' | 'warning' | 'default' => {
    const chip: { [key: string]: 'success' | 'error' | 'default' | 'warning' } = {
      '-': 'default',
      'success': 'success',
      'failed': 'error',
      'running': 'warning',
    };

    return chip[status];
  }

  return (
    <Box
      sx={{
        justifyContent: "center",
        mt: 2
      }}
    >
      <Container sx={{ maxWidth: "xl" }}>
        <Card sx={{ maxWidth: 400, mx: "auto", p: 1, borderRadius: 2, boxShadow: 3 }}>
          <CardContent>
            <Stack spacing={2}>
              <Box>
                <Typography variant="subtitle2" color="text.secondary">
                  Last Update
                </Typography>
                <Typography variant="h6">
                  {lastSync.last_sync == '-' ? '-' : formatDistanceToNow(new Date(lastSync.last_sync), { addSuffix: true, includeSeconds: true })}
                </Typography>
              </Box>

              <Box>
                <Typography variant="subtitle2" color="text.secondary">
                  Status
                </Typography>
                <Chip
                  label={lastSync.status}
                  color={getChip(lastSync.status)}
                  variant="outlined"
                  size="small"
                  sx={{ mt: 0.5 }}
                />
              </Box>

              <Button variant="contained" size="medium" fullWidth sx={{ borderRadius: 2 }} onClick={onSubmit} disabled={isLoading || lastSync.status === 'running'}>
                Sync Job
              </Button>

            </Stack>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default SyncPage;