import React, {Suspense} from 'react';
import {Routes, Route, Link} from 'react-router-dom'
import {MainPageLazy} from "./pages/MainPage/MainPage.lazy";
import {AboutPageLazy} from "./pages/AboutPage/AboutPage.lazy";
import "./styles/index.scss"
import {useTheme} from "./theme/useTheme";
import {classNames} from "../helpers/classNames/classNames";

export const App = () => {
    const {theme,toggleTheme} = useTheme()
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE THEME</button>
            <Link to='/'>MainPage</Link>
            <Link to='/about'>AboutPage</Link>
            <Suspense fallback={ <div>Loading...</div> }>
                <Routes>
                    <Route path='/' element={<MainPageLazy />}/>
                    <Route path='/about' element={<AboutPageLazy />}/>
                </Routes>
            </Suspense>
        </div>
    );
};