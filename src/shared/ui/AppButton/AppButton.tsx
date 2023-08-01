import { classNames } from 'shared/lib/classNames/classNames';
import { FC, HTMLAttributes } from 'react';
import cls from './AppButton.module.scss';

export enum ThemeAppButton {
    CLEAR='clear',
}

export interface AppButtonProps extends HTMLAttributes<HTMLButtonElement> {
    className?: string,
    theme?: string
}
export const AppButton: FC<AppButtonProps> = (props: AppButtonProps) => {
    const {
        className,
        children,
        theme,
        ...otherProps
    } = props;
    return (
        <button
            type="button"
            className={classNames(cls.AppButton, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
