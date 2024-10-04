import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: login,
    onSuccess: () => {
      navigate('/dashboard', { replace: true });

      // This fixes weird redirection bug
      queryClient.invalidateQueries({
        queryKey: ['user'],
      });
    },
    onError: () => toast.error('Provided email or password is incorrect'),
  });

  return { login: mutate, isPending };
}
