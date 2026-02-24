import { useDeleteMasterJob, useGetMasterJobs } from "@/app/api/master_job/useMasterJobApi";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface JobForm {
  id: string;
  name: string;
  location: string;
}

export const useMasterJobForm = () => {
  const form = useForm<JobForm>({
    defaultValues: {
      id: '',
      name: '',
      location: '',
    },
  });

	return {
    form,
  };
};