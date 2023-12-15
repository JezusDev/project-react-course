import { classNames } from 'shared/lib';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import React from 'react';
import LightThemeIcon from 'shared/assets/icons/theme-light.svg';
import DarkThemeIcon from 'shared/assets/icons/theme-dark.svg';
import { AppButton, AppButtonTheme } from 'shared/ui/AppButton/AppButton';

export interface ThemeSwitcherProps {
    className?: string
}
export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <AppButton
            theme={AppButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.LIGHT ? <LightThemeIcon /> : <DarkThemeIcon />}
        </AppButton>
    );
};
