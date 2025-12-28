import type { LoginResponse } from "@/app/api/auth/type";
import { usePostLogin } from "@/app/api/auth/useAuthApi";
import type { ResponseApi } from "@/shared/types/api";
import type { AxiosResponse } from "axios";
import { useForm, type SubmitHandler } from "react-hook-form";

interface LoginFormProps {
  onError: (error: string) => void;
  onSuccess: (data: AxiosResponse<ResponseApi<LoginResponse>>) => void;
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
    onSuccess: (data) => onSuccess(data),
    onError: (data) => onError(data.response?.data.error.message || 'Terjadi kesalahan'),
  });

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    await loginMutation.mutateAsync(data);
  };

  return {
    form,
    onSubmit,
    isLoading: loginMutation.isPending,
  };
};

export default useLoginForm;