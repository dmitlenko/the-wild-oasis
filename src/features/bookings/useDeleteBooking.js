import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteBooking } from '../../services/apiBookings';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export function useDeleteBooking({ navigateBack = true } = {}) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: deleteBooking,
    onSuccess: () => {
      if (navigateBack) navigate(-1);
      toast.success('Booking deleted successfully');
      queryClient.invalidateQueries({ active: true });
    },
    onError: () => toast.error('There was an error while deleting a booking'),
  });

  return { deleteBooking: mutate, isDeleting: isPending };
}
