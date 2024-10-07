import { useQuery } from '@tanstack/react-query';
import { getStaysTodayActivity } from '../../services/apiBookings';

export function useTodayActivity() {
  const { data, isPending, error } = useQuery({
    queryKey: ['today-activity'],
    queryFn: getStaysTodayActivity,
  });

  if (error) throw new Error(error.message);

  return { activities: data, isPending };
}
