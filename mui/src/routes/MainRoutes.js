import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - utilities
const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
const Sdmayoral = Loadable(lazy(() => import('pages/components-overview/sd-mayoral')));
const GJW = Loadable(lazy(() => import('pages/components-overview/GJW')));
const TG = Loadable(lazy(() => import('pages/components-overview/TG')));
const News = Loadable(lazy(() => import('pages/components-overview/news')));
const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: '/news',
      element: <News />
    },
    {
      path: 'color',
      element: <Color />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'shadow',
      element: <Shadow />
    },
    {
      path: 'typography',
      element: <Typography />
    },
    {
      path: 'sd-mayoral',
      element: <Sdmayoral />
    },
    {
      path: 'GJW',
      element: <GJW/>
    },
    {
      path: 'TG',
      element: <TG/>
    },
    {
      path: 'icons/ant',
      element: <AntIcons />
    }
  ]
};

export default MainRoutes;
