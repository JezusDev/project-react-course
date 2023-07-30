import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

export interface NavbarProps {
    className?: string
}
export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/">{t('Главная')}</AppLink>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <AppLink theme={AppLinkTheme.SECONDARY} to="/about">{t('О сайте')}</AppLink>
            </div>
        </div>
    );
};
