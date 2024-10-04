import { useQuery } from '@tanstack/react-query';
import { getBooking } from '../../services/apiBookings';
import { useParams } from 'react-router-dom';

export function useBooking() {
  const { bookingId } = useParams();

  const {
    data: booking,
    isPending,
    error,
  } = useQuery({
    queryKey: ['booking', bookingId],
    queryFn: () => getBooking(bookingId),
    retry: false,
  });

  if (error) {
    console.log(error);
    throw new Error('Could not get booking');
  }

  return { booking, isPending, error };
}
