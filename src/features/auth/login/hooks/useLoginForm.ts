import { usePostLogin } from "@/app/api/auth/useAuthApi";
import { useAuth } from "@/app/contexts/AuthContext";
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
  const auth = useAuth();
  const form = useForm<LoginFormData>({
    defaultValues: {
      email: '',
      password: '',
    }
  });

  const loginMutation = usePostLogin({
    onSuccess: (data) => {
      auth.setUser({
        email: 'al',
        name: 'A',
        profession: 'aaa',
      });
      onSuccess();
    },
    onError: (data) => onError(data.response?.data.error.message || 'Terjadi kesalahan'),
  });

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    auth.login(data.email, data.password);
    await loginMutation.mutateAsync(data);
  };

  return {
    form,
    onSubmit,
    isLoading: loginMutation.isPending,
  };
};

export default useLoginForm;