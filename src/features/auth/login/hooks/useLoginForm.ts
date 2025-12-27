import { usePostLogin } from "@/app/api/auth/useAuthApi";
import { useForm, type SubmitHandler } from "react-hook-form";

interface LoginFormProps {
  onError: (error: string) => void;
  onSuccess: () => void;
}

interface LoginFormData {
  email: string;
  password: string;
}

const useLoginForm = ({ onError, onSuccess }: LoginFormProps) => {
  const form = useForm<LoginFormData>({
    defaultValues: {
      email: '',
      password: '',
    }
  });

  const loginMutation = usePostLogin({
    onSuccess: onSuccess,
    onError: (data) => onError(data.response?.data.error.message || 'Terjadi kesalahan'),
  });

  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    loginMutation.mutate(data);
  };

  return {
    form,
    onSubmit,
    isLoading: loginMutation.isPending,
  };
};

export default useLoginForm;