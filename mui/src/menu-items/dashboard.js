// assets
import { DashboardOutlined, PaperClipOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined,
  PaperClipOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  title: 'Overview',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Overview',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'news',
      title: 'News',
      type: 'item',
      url: '/news',
      icon: icons.PaperClipOutlined,
      breadcrumbs: true
    }
  ]
};

export default dashboard;
