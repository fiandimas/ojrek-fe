import type React from "react";
import { Box, Card, CardContent, Typography, Chip, Button, Stack, Container, Grid } from "@mui/material";
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';

const pieData = [
  { id: 1, value: 20, label: "Jobstreet" },
  { id: 2, value: 25, label: "Kalibrr" },
];
const days = Array.from({ length: 31 }, (_, i) => String(i + 1));
const values = [12, 19, 3, 5, 2, 3, 10];

const DashboardPage: React.FC = () => {
  return (
    <Box sx={{ marginTop: 2 }}>
      <Container>
        <Grid container spacing={2}>
          <Grid size={6}>
            <Card>
              <CardContent>
                <PieChart
                  series={[{ data: pieData }]}
                />
              </CardContent>
            </Card>
          </Grid>

          <Grid size={6}>
            <Card>
              <CardContent>
                <BarChart
                  xAxis={[{ scaleType: "band", data: days }]}
                  series={[{ data: values }]}
                  width={500}
                  height={300}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default DashboardPage;