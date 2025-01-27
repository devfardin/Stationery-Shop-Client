import { Navigate } from 'react-router';
import { selectCurrentToken, selectCurrentUser } from '../../../../redux/features/auth/authSlice';
import { useAppSelector } from '../../../../redux/hooks';
import { ReactNode } from 'react';

const AdminProtected = ({ children }: { children: ReactNode }) => {
    const token = useAppSelector(selectCurrentToken);
    const user = useAppSelector(selectCurrentUser);
    if (token && user?.role === 'admin') {
        return children;
    } 
    return <Navigate to='/login' replace={true} />
}

export default AdminProtected
