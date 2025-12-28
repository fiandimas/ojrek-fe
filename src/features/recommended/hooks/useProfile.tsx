import { useGetMyJobs } from "@/app/api/profile/useAuthProfile";


export const useProfile = () => {
  
  const { data } = useGetMyJobs();

  const res = data?.data.data || [];
  return {
    res,
  };
};