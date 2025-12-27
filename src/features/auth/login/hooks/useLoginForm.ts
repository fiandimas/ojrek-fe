import { usePostLogin } from "@/app/api/auth/useAuthApi";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

interface LoginFormData {
  email: string;
  password: string;
}

const useLoginForm = () => {
  const [error, setError] = useState<string>();

  const form = useForm<LoginFormData>({
    defaultValues: {
      email: '',
      password: '',
    }
  });

  const loginMutation = usePostLogin({
    onSuccess: () => {},
    onError: (data) => {
      setError(data.response?.data.error.message || 'Terjadi kesalahan');
    }
  });

  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    loginMutation.mutate(data);
  };

  return {
    form,
    onSubmit,
    isLoading: loginMutation.isPending,
    error,
  };
};

export default useLoginForm;