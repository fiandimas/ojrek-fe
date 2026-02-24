import { useGetLastSync, usePostJobSync } from "@/app/api/sync/useSyncApi";
import { useEffect, useState } from "react";

export const useSyncPage = () => {
  const [lastSync, setLastSync] = useState<{ last_sync: string; status: '-' | 'success' | 'running' | 'failed'}>({
    last_sync: '-',
    status: '-',
  });

  const { data, refetch } = useGetLastSync();
  useEffect(() => {
    if (data?.data.data) {
      setLastSync(data.data.data);
    }
  }, [data]);

  const syncJob = usePostJobSync();
 const onSubmit = async () => {
    const res = await syncJob.mutateAsync();

    if (res?.data?.data) {
      setLastSync(res.data.data);
    }

    await refetch();
  };

  return {
    lastSync,
    onSubmit,
    isLoading: syncJob.isPending,
  }
};