import { ReactNode } from 'react';
import { Navigate } from 'react-router';
import { selectCurrentToken } from '../../../../redux/features/auth/authSlice';
import { useAppSelector } from '../../../../redux/hooks';

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
    const token = useAppSelector(selectCurrentToken);
    if (!token) {
        return <Navigate to='/login' replace={true} />
    }
    return children;
}

export default ProtectedRoute
