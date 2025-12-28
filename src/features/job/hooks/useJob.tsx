import { useGetJobs } from "@/app/api/job/useJobApi";
import { useState } from "react";

export const useJob = () => {
  const [page, _setPage] = useState<number>(0);
  const [limit, _setLimit] = useState<number>(30);
  const [search, _setSearch] = useState<string | undefined>('');

  const { data, isLoading, isPending } = useGetJobs({
    page: page,
    limit: limit,
    search: search,
  });

  const setPage = (page: number) => {
    _setPage(page);
  }

  const setLimit = (page: number) => {
    _setPage(page);
  }

  const setSearch = (search: string) => {
    _setSearch(search);
  }

  const jobs = data?.data.data?.jobs || [];
  const jobCount = data?.data.data?.count || 0;

  return {
    page,
    limit,
    jobs,
    jobCount,
    isLoading,
    isPending,

    setPage,
    setLimit,
    setSearch,
  };
};