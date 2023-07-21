import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        element: <MainPage />,
        path: RoutePaths[AppRoutes.MAIN],
    },
    [AppRoutes.ABOUT]: {
        element: <AboutPage />,
        path: RoutePaths[AppRoutes.ABOUT],
    }
}


