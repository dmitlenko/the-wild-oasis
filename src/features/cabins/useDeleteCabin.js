import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { deleteCabin as deleteCabinAction } from '../../services/apiCabins';

export function useDeleteCabin() {
  const queryClient = useQueryClient();
  const { mutate: deleteCabin, isPending: isDeleting } = useMutation({
    mutationFn: deleteCabinAction,
    onSuccess: () => {
      toast.success('Cabin was successfully deleted!');

      queryClient.invalidateQueries({
        queryKey: ['cabin'],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { deleteCabin, isDeleting };
}
