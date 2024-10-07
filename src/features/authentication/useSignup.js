import { useMutation } from '@tanstack/react-query';
import { signup } from '../../services/apiAuth';
import toast from 'react-hot-toast';

export function useSignup() {
  const { mutate, isPending } = useMutation({
    mutationFn: signup,
    onSuccess: (user) => {
      console.log(user);
      toast.success(
        "Account successfully created. Please verify the new account from the user's email address"
      );
    },
    onError: () => toast.error('Error while signing up a user'),
  });

  return { signup: mutate, isPending };
}
