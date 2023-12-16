import React, {
    FC, ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames, Mods } from 'shared/lib';
import { Portal } from 'shared/ui';
import { useTheme } from 'app/providers/ThemeProvider';
import cls from './Modal.module.scss';

export interface ModalProps {
    className?: string,
    children: ReactNode,
    isOpen: boolean,
    onClose?: () => void
}
export const Modal: FC<ModalProps> = (props) => {
    const {
        className,
        children,
        isOpen,
        onClose,
    } = props;
    const { theme } = useTheme();

    const [isClosing, setIsClosing] = useState(false);
    const timeRef = useRef<ReturnType<typeof setTimeout>>();

    const handleClose = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timeRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, 300);
        }
    }, [onClose]);

    const handleKeyDown = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            handleClose();
        }
    }, [handleClose]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
            document.body.classList.add('scroll-lock');
        }
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            clearTimeout(timeRef.current);
            document.body.classList.remove('scroll-lock');
        };
    }, [isOpen, handleKeyDown]);

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.closing]: isClosing,
    };

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={classNames(cls.overlay, {}, [theme])} onClick={handleClose}>
                    <div className={cls.content} onClick={(e) => e.stopPropagation()}>
                        { children }
                    </div>
                </div>
            </div>
        </Portal>
    );
};
