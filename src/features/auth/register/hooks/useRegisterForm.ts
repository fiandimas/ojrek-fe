import { usePostRegister } from "@/app/api/auth/useAuthApi";
import type { ResponseApi } from "@/shared/types/api";
import type { AxiosError } from "axios";
import { useForm, type SubmitHandler } from "react-hook-form";

interface RegisterFormProps {
  onError: (error: string) => void;
  onSuccess: () => void;
}

interface Profession {
  id: string;
  label: string;
}

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  profession: Profession;
}

const useRegisterForm = ({ onSuccess, onError }: RegisterFormProps) => {
  const form = useForm<RegisterFormData>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      profession: {
        id: '',
        label: '',
      },
    }
  });

  const registerMutation = usePostRegister({
    onError: (data) => onError(data.response?.data.error.message || 'Terjadi kesalahan'),
    onSuccess: onSuccess,
  });

  const onSubmit: SubmitHandler<RegisterFormData> = async (data) => {
    registerMutation.mutateAsync({
      name: data.email,
      email: data.email,
      password: data.password,
      profession: data.profession.label,
    });
  };

  const professions: Profession[] = [
    {
      id: '1',
      label: 'Data'
    },
        {
      id: '1',
      label: 'Data'
    }
    ,    {
      id: '1',
      label: 'Data'
    }
    ,
        {
      id: '1',
      label: 'Data'
    },
        {
      id: '1',
      label: 'Data'
    },
        {
      id: '1',
      label: 'Data'
    },
        {
      id: '1',
      label: 'Data'
    },
  ];

  return {
    form,
    onSubmit,
    isLoading: registerMutation.isPending,
    professions,
  };
};

export default useRegisterForm;