import { classNames } from 'shared/lib/classNames/classNames';
import { AppButton } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import cls from './PageError.module.scss';

export const PageError = () => {
    const { t } = useTranslation();
    const onReload = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.PageError)}>
            <h1>{t('Произошла непредвиденная ошибка')}</h1>
            <AppButton onClick={onReload} className={cls.AppButton}>
                {t('Перезагрузить страницу')}
            </AppButton>
        </div>
    );
};
