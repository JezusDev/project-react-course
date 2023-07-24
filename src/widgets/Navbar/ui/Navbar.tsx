import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import {AppLink} from 'shared/ui';
import cls from "./Navbar.module.scss";
import {AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

export interface NavbarProps {
    className?: string
}
export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <ThemeSwitcher />
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to='/'>Главная</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to='/about'>О сайте</AppLink>
            </div>
        </div>
    );
};