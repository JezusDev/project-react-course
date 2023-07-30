import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'providers/ThemeProvider';
import React from 'react';
import LightThemeIcon from 'shared/assets/icons/theme-light.svg';
import DarkThemeIcon from 'shared/assets/icons/theme-dark.svg';
import { AppButton, ThemeAppButton } from 'shared/ui/AppButton/ui/AppButton';

export interface ThemeSwitcherProps {
    className?: string
}
export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <AppButton
            theme={ThemeAppButton.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.LIGHT ? <DarkThemeIcon /> : <LightThemeIcon />}
        </AppButton>
    );
};
