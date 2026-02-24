import type React from "react";
import { useEffect } from "react";
import type { Job } from "@/app/api/master_job/type";
import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import type { JobForm } from "../hooks/useMasterJobForm";

const PLATFORM_OPTIONS = [
  { value: "95482b73-1795-44db-9ee8-6c8c264ac944", label: "Glints" },
  { value: "e2007454-cd87-4c54-bd62-5d31239e0d8e", label: "Indeed" },
  { value: "dd39ebea-48f7-4780-8e83-47f64c9b78c4", label: "Jobstreet" },
  { value: "87714918-5c15-42f4-a4ae-d6c6dc6fe049", label: "Kalibrr" },
];

interface MasterJobFormProps {
  open: boolean;
  mode: "create" | "edit";
  job?: Job;
  isSubmitting?: boolean;
  onSubmit: (id: string | null, data: JobForm) => Promise<void>;
  onClose: () => void;
}

const MasterJobForm: React.FC<MasterJobFormProps> = ({
  open,
  mode,
  job,
  isSubmitting,
  onSubmit,
  onClose,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<JobForm>({
    defaultValues: {
      name: "",
      location: "",
      platform: "",
    },
  });

  // Reset form values whenever the dialog opens with a different job
  useEffect(() => {
    if (open) {
      reset({
        name: job?.name || "",
        location: job?.location || "",
        platform: job?.platform || "",
      });
    }
  }, [open, job, reset]);

  const handleFormSubmit = handleSubmit(async (data) => {
    await onSubmit(mode === "edit" && job ? job.id : null, data);
    onClose();
  });

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{mode === "create" ? "Add Job" : "Edit Job"}</DialogTitle>
      <DialogContent>
        <Stack spacing={2} sx={{ mt: 1 }}>
          <TextField
            placeholder="Job Name"
            size="small"
            fullWidth
            {...register("name", { required: "Job name is required" })}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          <TextField
            placeholder="Location"
            size="small"
            fullWidth
            {...register("location", { required: "Location is required" })}
            error={!!errors.location}
            helperText={errors.location?.message}
          />
          <Controller
            name="platform"
            control={control}
            rules={{ required: "Platform is required" }}
            render={({ field }) => (
              <FormControl size="small" fullWidth error={!!errors.platform}>
                <InputLabel>Platform</InputLabel>
                <Select {...field} label="Platform">
                  {PLATFORM_OPTIONS.map((opt) => (
                    <MenuItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </MenuItem>
                  ))}
                </Select>
                {errors.platform && (
                  <FormHelperText>{errors.platform.message}</FormHelperText>
                )}
              </FormControl>
            )}
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} disabled={isSubmitting}>
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={handleFormSubmit}
          disabled={isSubmitting}
          startIcon={isSubmitting ? <CircularProgress size={16} /> : undefined}
        >
          {mode === "create" ? "Create" : "Save"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MasterJobForm;