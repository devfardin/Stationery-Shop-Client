
import { useAppSelector } from "../../hooks";
import { selectCurrentUser } from "../auth/authSlice"; 
import { useGetMeQuery } from "../user/userApi";

export const useFullUser = () => {
    const user = useAppSelector(selectCurrentUser);
    const { data: userInfo, error, isLoading } = useGetMeQuery(user?.userId, {
        skip: !user?.userId,
    });

    return {      
        userInfo,   
        error,      
        isLoading, 
    };
};
