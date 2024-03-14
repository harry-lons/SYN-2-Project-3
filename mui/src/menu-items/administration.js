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
  title: 'Races',
  type: 'group',
  children: [
    {
      id: 'sd-mayoral',
      title: 'San Diego Mayoral',
      type: 'item',
      url: '/sd-mayoral',
      icon: icons.FontSizeOutlined
    },
    {
      id: 'la-mayoral',
      title: 'Los Angeles Mayoral',
      type: 'item',
      url: '/la-mayoral',
      icon: icons.FontSizeOutlined
    },
    {
      id: 'presidential',
      title: 'Presidential',
      type: 'item',
      url: '/Presidential',
      icon: icons.FontSizeOutlined
    }
  ]
};

export default administration;
