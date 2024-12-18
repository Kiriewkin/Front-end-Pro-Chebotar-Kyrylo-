import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../store/slices/loginSlice';

import './Layout.css';

export default function Layout() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const authState = useSelector((state) => state.login.isAuth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLayoutLogin = () => {
        if (!authState) {
            navigate('/login', { replace: true });
        }
    };

    const handleLogout = () => {
        dispatch(logOut());
        navigate('/login');
    };

    return (
        <>
            <header>
                <div className={`header-container header-container-${theme}`}>
                    <NavLink className={`navlink navlink-${theme}`} to="/">Home</NavLink>
                    <NavLink className={`navlink navlink-${theme}`} to="/aboutme">About Me</NavLink>
                    <NavLink className={`navlink navlink-${theme}`} to="/counter">Counter</NavLink>
                    <NavLink className={`navlink navlink-${theme}`} to="/formikform">Form</NavLink>
                    <NavLink className={`navlink navlink-${theme}`} to="/contacts">Contacts</NavLink>

                    {authState ? (
                        <button 
                         className={`theme-button theme-button-${theme}`}
                         onClick={handleLogout}>
                            Logout
                        </button>
                    ) : (
                        <button 
                        className={`theme-button theme-button-${theme}}`} 
                        onClick={handleLayoutLogin}>
                            Login
                        </button>
                    )}

                    <button className={`theme-button theme-button-${theme}`} onClick={toggleTheme}>Change Theme</button>
                </div>
            </header>
            <Outlet />
        </>
    );
}
