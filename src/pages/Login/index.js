import { useSelector } from 'react-redux';
import { useAuth } from '../../utils/hooks/useAuth';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { useNavigate, useLocation } from 'react-router-dom';

import './index.css'

const Login = () => {
    const authState = useSelector((state) => state.login.isAuth);
    const { theme } = useContext(ThemeContext);
    const { handleLogin } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    
    const from = location.state?.from?.pathname || '/';

    const handlePageLogin = () => {
        handleLogin();
        navigate(from, { replace: true });
    };

    return (
        <div className="login-container">
            {authState ? (
                <p>Вы уже залогинены</p>
            ) : (
                <>
                    <p>Войдите в аккаунт, пожалуйста</p>
                    <button onClick={handlePageLogin} className={`theme-button theme-button-${theme}`} >Login</button>
                </>
            )}
        </div>
    );
};

export default Login;
