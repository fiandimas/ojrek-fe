import { useState } from "react";
import dayjs, { type Dayjs } from "dayjs";
import { useGetColumn, useGetPie } from "@/app/api/dashboard/useJobApi";

export const useDashboardApi = () => {
  const [startDate, setStartDate] = useState<string>(dayjs().subtract(30, "day").format("YYYY-MM-DD"));
  const [endDate, setEndDate] = useState<string>(dayjs().format("YYYY-MM-DD"));

  const dateParams = {
    start_date: startDate,
    end_date: endDate,
  };

  const pieQuery = useGetPie(dateParams);
  const columnQuery = useGetColumn(dateParams);

  return {
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    pieQuery,
    columnQuery,
  };
};