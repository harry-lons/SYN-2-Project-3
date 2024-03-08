// assets
import {
  AppstoreAddOutlined,
  AntDesignOutlined,
  BarcodeOutlined,
  BgColorsOutlined,
  FontSizeOutlined,
  LoadingOutlined
} from '@ant-design/icons';

// icons
const icons = {
  FontSizeOutlined,
  BgColorsOutlined,
  BarcodeOutlined,
  AntDesignOutlined,
  LoadingOutlined,
  AppstoreAddOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const administration = {
  id: 'administration',
  title: 'Administration',
  type: 'group',
  children: [
    {
      id: 'util-exampletable',
      title: 'Runners',
      type: 'item',
      url: '/activities',
      icon: icons.FontSizeOutlined
    },
    {
      id: 'util-exampleform',
      title: 'Upload Scans',
      type: 'item',
      url: '/example-form',
      icon: icons.FontSizeOutlined
    },
    {
      id: 'test',
      title: 'harry',
      type: 'item',
      url: '/harry-test',
      icon: icons.FontSizeOutlined
    }
  ]
};

export default administration;
