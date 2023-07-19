import React, {Suspense} from 'react';
import {Routes, Route, Link} from 'react-router-dom'
import "./styles/index.scss"
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AboutPage} from "pages/AboutPage";
import { MainPage } from 'pages/MainPage';

export const App = () => {
    const {theme,toggleTheme} = useTheme()
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE THEME</button>
            <Link to='/'>MainPage</Link>
            <Link to='/about'>AboutPage</Link>
            <Suspense fallback={ <div>Loading...</div> }>
                <Routes>
                    <Route path='/' element={<MainPage />}/>
                    <Route path='/about' element={<AboutPage />}/>
                </Routes>
            </Suspense>
        </div>
    );
};