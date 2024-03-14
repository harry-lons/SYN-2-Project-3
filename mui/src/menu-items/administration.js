// assets
import {
  AppstoreAddOutlined,
  AntDesignOutlined,
  BarcodeOutlined,
  BgColorsOutlined,
  FontSizeOutlined,
  LoadingOutlined,
  DatabaseOutlined
} from '@ant-design/icons';

// icons
const icons = {
  FontSizeOutlined,
  BgColorsOutlined,
  BarcodeOutlined,
  AntDesignOutlined,
  LoadingOutlined,
  AppstoreAddOutlined,
  DatabaseOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const administration = {
  id: 'administration',
  title: 'Races',
  type: 'group',
  children: [
    {
      id: 'sd-mayoral',
      title: 'San Diego Mayoral',
      type: 'item',
      url: '/sd-mayoral',
      icon: icons.DatabaseOutlined
    },
    {
      id: 'la-mayoral',
      title: 'Los Angeles Mayoral',
      type: 'item',
      url: '/la-mayoral',
      icon: icons.DatabaseOutlined
    },
    {
      id: 'presidential',
      title: 'Presidential',
      type: 'item',
      url: '/Presidential',
      icon: icons.DatabaseOutlined
    }
  ]
};

export default administration;
