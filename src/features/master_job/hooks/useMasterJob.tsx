import { useDeleteMasterJob, useGetMasterJobs, usePostMasterJob, usePutMasterJob } from "@/app/api/master_job/useMasterJobApi";
import { useState } from "react";
import type { JobForm } from "./useMasterJobForm";

export const useMasterJob = () => {
  const [search, setSearch] = useState<string>('');
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(50);
  const [sort, setSort] = useState<{ col: string, sort: 'asc' | 'desc'}>();

  const { data, isLoading, isFetching, refetch } = useGetMasterJobs({
    page,
    limit,
    search,
    col: sort?.col,
    sort: sort?.sort,
  });

  const { mutateAsync: createJob, isPending: isCreating } = usePostMasterJob({
    onSuccess: () => refetch(),
  });

  const { mutateAsync: updateJob, isPending: isUpdating } = usePutMasterJob({
    onSuccess: () => refetch(),
  });

  const { mutateAsync: deleteJob, isPending: isDeleting } = useDeleteMasterJob({
    onSuccess: () => refetch(),
  });

  const onDelete = async (id: string) => {
    await deleteJob(id);
  };

  const onSubmit = async (id: string | null, data: JobForm) => {
    if (id) {
      await updateJob({ id, data });
    } else {
      await createJob(data);
    }
  };

  const jobsData = data?.data.data?.jobs || [];
  const jobCount = data?.data.data?.count || 0;

  return {
    jobsData,
    // isLoading is true only on first load; isFetching covers refetch/page changes too
    isLoading: isLoading || isFetching,
    isCreating,
    isUpdating,
    isDeleting,
    page,
    setPage,
    limit,
    setLimit,
    jobCount,

    setSearch,
    setSort,
    refetch,
    onDelete,
    onSubmit,
  };
};