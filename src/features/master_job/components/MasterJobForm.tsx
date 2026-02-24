import type { Job } from "@/app/api/master_job/type";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField } from "@mui/material";
import { Form } from "react-hook-form";
import { useMasterJobForm } from "../hooks/useMasterJobForm";

interface MasterJobFormProps {
  mode: 'create' | 'edit';
  job: Job;
  onSubmit: () => void;
};

const MasterJobForm: React.FC<MasterJobFormProps> = ({ mode, job, onSubmit }) => {
  const { form } = useMasterJobForm();
  const { register, setValue } = form;

  return (
    <Dialog open={dialog}>
      <DialogTitle>Hapus Data?</DialogTitle>
      <DialogContent>
        <Form control={form.control}>
          
        </Form>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setDialog(false)}>Batal</Button>
        <Button color="error" variant="contained">
          Hapus
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MasterJobForm;