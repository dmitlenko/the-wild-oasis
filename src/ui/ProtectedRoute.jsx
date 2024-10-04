import styled from 'styled-components';
import { useUser } from '../features/authentication/useUser';
import Spinner from './Spinner';
import { Navigate } from 'react-router-dom';

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function ProtectedRoute({ children }) {
  // 1. Load authenticated user
  const { isPending, isAuthenticated, isFetching } = useUser();

  // 2. While loading show a spinner
  if (isPending)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // 3. If there is no authenticated user redirect to login page
  if (!isAuthenticated && !isPending && !isFetching)
    return <Navigate to="/login" replace />;

  // 4. If there is a user, render the app
  return children;
}
