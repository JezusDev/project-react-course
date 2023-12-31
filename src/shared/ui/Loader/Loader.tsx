import { classNames } from 'shared/lib';
import './Loader.scss';

export interface LoaderProps {
    className?: string
}
export const Loader = ({ className }: LoaderProps) => (
    <div className={classNames('lds-spinner', {}, [className])}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
    </div>
);
