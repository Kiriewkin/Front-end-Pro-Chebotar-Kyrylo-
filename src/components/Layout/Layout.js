import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { logOut } from '../../store/slices/loginSlice';
import { ThemeContext } from '../../context/ThemeContext';
import { Flex, Layout } from 'antd';
import {
    GithubOutlined,
    LinkedinOutlined,
    MailOutlined
  } from '@ant-design/icons';

import './Layout.css';

export default function MyLayout() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const authState = useSelector((state) => state.login.isAuth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { Header, Content, Footer } = Layout;

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
        <Flex gap="middle" wrap>
            <Layout>
                <Header className={`header-container header-container-${theme}`}>
                    <div className="wrapper" style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                        <NavLink className={`navlink navlink-${theme}`} to="/">Home</NavLink>
                        <NavLink className={`navlink navlink-${theme}`} to="/todo">Todo</NavLink>
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
                </Header >
                <Content>
                    <div className="wrapper">
                        <Outlet />
                    </div>
                </Content>
                <Footer className={`footer-container footer-container-${theme}`} style={{ marginBottom: 0 }}>
                    <div className="wrapper" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <p className="footer-text">
                            © {new Date().getFullYear()} Kyrylo Chebotar | Front-End Developer
                        </p>
                        <div className="footer-links">
                            <a href="https://www.linkedin.com/in/kyrylo-chebotar-75097b33a/" target="_blank" rel="noopener noreferrer" className="footer-link">
                                LinkedIn <LinkedinOutlined />
                            </a>
                            <a href="https://github.com/Kiriewkin" target="_blank" rel="noopener noreferrer" className="footer-link">
                                GitHub <GithubOutlined />
                            </a>
                            <a href="mailto:chebotar.kiryusha@gmail.com" className="footer-link">
                                Email <MailOutlined />
                            </a>
                        </div>
                    </div>
                </Footer>
            </Layout>
        </Flex>
    );
}
