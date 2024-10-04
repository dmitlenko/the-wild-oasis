import { useMutation } from '@tanstack/react-query';
import { login } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export function useLogin() {
  const navigate = useNavigate();
  const { mutate, error, isPending } = useMutation({
    mutationFn: login,
    onSuccess: () => navigate('/dashboard', { replace: true }),
    onError: () => toast.error('Provided email or password is incorrect'),
  });

  return { login: mutate, isPending };
}
