import { lazy, LazyExoticComponent } from 'react';
/* import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages'; */
import { NoLazy } from '../01-lazyload//pages/NoLazy'

type JSXComponent = () => JSX.Element;

interface Route {
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
    path: string;
    to: string;
}

const LazyLayout = lazy(() => import(/* webpackChunkName: 'LazyLayout' */ '../01-lazyload/layout/LazyLayout'));

export const routes: Route[] = [
    {
        Component: LazyLayout,
        name: 'LazyLayout - Dash',
        path: '/lazyload/*',
        to: '/lazyload/',
    },
    {
        Component: NoLazy,
        name: 'No Lazy',
        path: 'no-lazy',
        to: '/no-lazy',
    }
]
