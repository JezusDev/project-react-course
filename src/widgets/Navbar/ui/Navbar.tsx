import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import { AppButton, AppButtonTheme, Modal } from 'shared/ui';
import cls from './Navbar.module.scss';

export interface NavbarProps {
    className?: string
}
export const Navbar = ({ className }: NavbarProps) => {
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const { t } = useTranslation();

    const toggleModal = useCallback(() => {
        setIsAuthModalOpen((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <AppButton
                onClick={toggleModal}
                theme={AppButtonTheme.OUTLINE_INVERTED}
                className={cls.links}
            >
                {t('Войти')}
            </AppButton>
            <Modal isOpen={isAuthModalOpen} onClose={toggleModal}>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci magni minus modi quo tempore! Accusamus dicta dolores doloribus ducimus, eligendi inventore nesciunt non qui reprehenderit rerum tenetur totam voluptatibus voluptatum!
                </div>
            </Modal>
        </div>
    );
};
