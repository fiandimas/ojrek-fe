import { usePostRegister } from "@/app/api/auth/useAuthApi";
import type { Profession } from "@/app/api/profession/type";
import { useGetProfessions } from "@/app/api/profession/useProfessionApi";
import { useForm, type SubmitHandler } from "react-hook-form";

interface RegisterFormProps {
  onError: (error: string) => void;
  onSuccess: () => void;
}

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  profession: Profession | null;
}

const useRegisterForm = ({ onSuccess, onError }: RegisterFormProps) => {
  const form = useForm<RegisterFormData>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      profession: null,
    }
  });

  const { data, isLoading: loadingProfession } = useGetProfessions();

  const registerMutation = usePostRegister({
    onError: (data) => onError(data.response?.data.error.message || 'Terjadi kesalahan'),
    onSuccess: onSuccess,
  });

  const onSubmit: SubmitHandler<RegisterFormData> = async (data) => {
    registerMutation.mutateAsync({
      name: data.name,
      email: data.email,
      password: data.password,
      profession: data.profession?.Name || '',
    });
  };

  const professions = data?.data.data || [];

  return {
    form,
    professions,
    onSubmit,
    isLoading: registerMutation.isPending,
    loadingProfession,
  };
};

export default useRegisterForm;