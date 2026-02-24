import { useDeleteMasterJob, useGetMasterJobs } from "@/app/api/master_job/useMasterJobApi";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface JobForm {
  id: string;
  name: string;
  location: string;
}

export const useMasterJob = () => {
	const [search, setSearch] = useState<string>('');
  const [page, _setPage] = useState<number>(0);
  const [limit, _setLimit] = useState<number>(100);

	const { data, isLoading, isPending, refetch } = useGetMasterJobs({
    page,
    limit,
		search: search,
	});

  const { mutateAsync: deleteJob } = useDeleteMasterJob({
    onSuccess: () => refetch(),
  });
	const onDelete = async (id: string) => {
		await deleteJob(id)
	}

  const form = useForm<JobForm>({
    defaultValues: {
      id: '',
      name: '',
      location: '',
    },
  });

	const jobsData = data?.data.data?.jobs || [];

	return {
		jobsData,
		isLoading,
		isPending,
    form,

		setSearch,
		refetch,
    onDelete,
	};
};