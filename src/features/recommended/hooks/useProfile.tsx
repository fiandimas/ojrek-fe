import { useGetMyJobs } from "@/app/api/profile/useAuthProfile";
import { useState } from "react";


export const useProfile = () => {
    const [page, _setPage] = useState<number>(0);
    const [limit, _setLimit] = useState<number>(30);
  
    const { data, isLoading, isPending } = useGetMyJobs({
      page: page,
      limit: limit,
    });
  
    const setPage = (page: number) => {
      _setPage(page);
    }
  
    const setLimit = (page: number) => {
      _setPage(page);
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
    };
};