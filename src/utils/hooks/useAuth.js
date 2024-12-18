import { useDispatch } from 'react-redux';
import { login, logOut } from '../../store/slices/loginSlice';

export const useAuth = () => {
    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(login());
    };

    const handleLogout = () => {
        dispatch(logOut());
    };

    return { handleLogin, handleLogout };
};
