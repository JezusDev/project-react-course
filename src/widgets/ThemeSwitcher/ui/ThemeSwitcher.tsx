import {classNames} from "shared/lib/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss";
import {Theme, useTheme} from "app/providers/ThemeProvider";
import React from "react";
import LightThemeIcon from 'shared/assets/icons/theme-light.svg'
import DarkThemeIcon from 'shared/assets/icons/theme-dark.svg'
import {AppButton} from "shared/ui/AppButton/ui/AppButton";
export interface ThemeSwitcherProps {
    className?: string
}
export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme()

    return (
        <AppButton
            className={classNames(cls.ThemeSwitcher, {}, [className ])}
            onClick={toggleTheme}
            theme={'clear'}
        >
            {theme === Theme.LIGHT ? <DarkThemeIcon /> : <LightThemeIcon />}
        </AppButton>

);
};