import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui';
import './PageLoader.scss';

export interface PageLoaderProps {
    className?: string
}
export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={classNames('page__loader', {}, [className])}>
        <Loader />
    </div>
);
