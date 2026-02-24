import { useForm } from "react-hook-form";
import type { Job } from "@/app/api/master_job/type";

export interface JobForm {
  name: string;
  location: string;
  platform: string;
}

export const useMasterJobForm = (job?: Job) => {
  const form = useForm<JobForm>({
    defaultValues: {
      name: job?.name || '',
      location: job?.location || '',
      platform: job?.platform || '',
    },
  });

  return { form };
};