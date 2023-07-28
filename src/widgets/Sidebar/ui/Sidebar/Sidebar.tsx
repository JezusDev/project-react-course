import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher";
import {useTranslation} from "react-i18next";

export interface SidebarProps {
    className?: string
}
export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const {t} = useTranslation()

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div
            className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed }, [className])}
        >
            <button onClick={onToggle}>{t('translation:Смена')}</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};