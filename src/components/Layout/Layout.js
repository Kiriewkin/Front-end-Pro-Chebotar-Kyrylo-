import { NavLink, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

import './Layout.css'

export default function Layout() {
    const { theme, toggleTheme } = useContext(ThemeContext)
    return (
        <>
            <header>
                <div className={`header-container header-container-${theme}`}>
                    <NavLink className={`navlink navlink-${theme}`} to='/'>Home</NavLink>
                    <NavLink className={`navlink navlink-${theme}`} to='/contacts'>Contacts</NavLink>
                    <NavLink className={`navlink navlink-${theme}`} to='/counter'>Counter</NavLink>
                    <NavLink className={`navlink navlink-${theme}`} to='/formikform'>Form</NavLink>
                    <NavLink className={`navlink navlink-${theme}`} to='/aboutme'>About Me</NavLink>
                    <button className={`theme-button theme-button-${theme}`} onClick={toggleTheme}>Change Theme</button>
                </div>
            </header>
            <Outlet />
        </>
    )
}