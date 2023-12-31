import { classNames } from 'shared/lib';
import { FC, HTMLAttributes } from 'react';
import cls from './AppButton.module.scss';

export enum AppButtonTheme {
    CLEAR='clear',
    CLEAR_INVERTED='clearInverted',
    OUTLINE='outline',
    OUTLINE_INVERTED = 'outlineInverted',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum AppButtonSize {
    M = 'm',
    L = 'l',
    XL = 'xl',
}

export interface AppButtonProps extends HTMLAttributes<HTMLButtonElement> {
    className?: string,
    theme?: string
    square?: boolean,
    size?: AppButtonSize
}
export const AppButton: FC<AppButtonProps> = (props: AppButtonProps) => {
    const {
        className,
        children,
        theme,
        square,
        size,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: true,
    };

    return (
        <button
            type="button"
            className={classNames(cls.AppButton, mods, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
