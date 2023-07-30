import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React from 'react';
import { AppButton, ThemeAppButton } from 'shared/ui/AppButton/ui/AppButton';

export interface LangSwitcherProps {
  className?: string;
}
export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <AppButton
            className={classNames('', {}, [className])}
            theme={ThemeAppButton.CLEAR}
            onClick={toggle}
        >
            {t('Язык')}
        </AppButton>
    );
};
