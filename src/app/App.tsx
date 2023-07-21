import React from 'react';
import {Link} from 'react-router-dom'
import "./styles/index.scss"
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";

export const App = () => {
    const {theme,toggleTheme} = useTheme()
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE THEME</button>
            <Link to='/'>MainPage</Link>
            <Link to='/about'>AboutPage</Link>
            <AppRouter />
        </div>
    );
};