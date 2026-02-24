import type React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Container,
  Grid,
  Stack,
  CircularProgress,
} from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart } from "@mui/x-charts/PieChart";
import dayjs from 'dayjs';
import { useDashboardApi } from "./hooks/useDashboardApi";

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Field } from "@/components/ui/field"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { type DateRange } from "react-day-picker"
import { useState } from "react";

const DashboardPage: React.FC = () => {
  const [date, setDate] = useState<DateRange | undefined>(undefined);

  const {
    setStartDate,
    setEndDate,
    pieQuery,
    columnQuery,
  } = useDashboardApi();

  const handleSelect = (selected: DateRange | undefined) => {
    setDate(selected);
    if (selected?.from && selected?.to) {
      setStartDate(format(selected.from, "yyyy-MM-dd"));
      setEndDate(format(selected.to, "yyyy-MM-dd"));
    }
  };

  const pieData =
    pieQuery.data?.data?.data?.map((item: any, index: any) => ({
      id: index,
      value: item.total,
      label: item.name,
    })) ?? [];

  const columnData = columnQuery.data?.data?.data ?? [];
  const xAxisLabels = columnData.map((item: any) => dayjs(item.job_date).format("YYYY-MM-DD"));
  const seriesValues = columnData.map((item: any) => item.total_jobs);

  return (
    <Box sx={{ marginTop: 2 }}>
      <Container>
        {/* Date Range Filter */}
        <Stack direction="row" justifyContent="flex-end" sx={{ mb: 3 }}>
          <Field className="mx-auto w-60">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  id="date-picker-range"
                  className="justify-start px-2.5 font-normal"
                >
                  <CalendarIcon />
                  {date?.from ? (
                    date.to ? (
                      <>
                        {format(date.from, "LLL dd, y")} -{" "}
                        {format(date.to, "LLL dd, y")}
                      </>
                    ) : (
                      format(date.from, "LLL dd, y")
                    )
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="range"
                  defaultMonth={date?.from}
                  selected={date}
                  onSelect={handleSelect}
                  numberOfMonths={2}
                />
              </PopoverContent>
            </Popover>
          </Field>
        </Stack>

        <Grid container spacing={2}>
          {/* Pie Chart */}
          <Grid size={6}>
            <Card>
              <CardContent>
                <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                  Jobs by Source
                </Typography>
                {pieQuery.isLoading ? (
                  <Box display="flex" justifyContent="center" alignItems="center" height={300}>
                    <CircularProgress />
                  </Box>
                ) : pieData.length > 0 ? (
                  <PieChart
                    series={[{ data: pieData }]}
                    width={450}
                    height={300}
                  />
                ) : (
                  <Box display="flex" justifyContent="center" alignItems="center" height={300}>
                    <Typography color="text.secondary">
                      {pieQuery.isFetched ? "No data available" : "Select a date range"}
                    </Typography>
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>

          {/* Bar Chart */}
          <Grid size={6}>
            <Card>
              <CardContent>
                <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                  Jobs per Day
                </Typography>
                {columnQuery.isLoading ? (
                  <Box display="flex" justifyContent="center" alignItems="center" height={300}>
                    <CircularProgress />
                  </Box>
                ) : seriesValues.length > 0 ? (
                  <BarChart
                    xAxis={[{ scaleType: "band", data: xAxisLabels }]}
                    series={[{ data: seriesValues }]}
                    width={500}
                    height={300}
                  />
                ) : (
                  <Box display="flex" justifyContent="center" alignItems="center" height={300}>
                    <Typography color="text.secondary">
                      {columnQuery.isFetched ? "No data available" : "Select a date range"}
                    </Typography>
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DashboardPage;