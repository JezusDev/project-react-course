import {classNames} from "shared/lib/classNames/classNames";
import cls from "./AppButton.module.scss";
import {ButtonHTMLAttributes, FC} from "react";

export enum ThemeAppButton {
    CLEAR='clear',
}

export interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    theme?: string
}
export const AppButton: FC<AppButtonProps> = (props: AppButtonProps) => {
    const {
        className,
        children,
        theme,
        ...otherProps
    } = props
    return (
        <button
            className={classNames(cls.AppButton, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};