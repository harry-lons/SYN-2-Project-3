import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Stack, Typography, ButtonBase } from '@mui/material';


// project import
import DrawerHeaderStyled from './DrawerHeaderStyled';
import { activeItem } from 'store/reducers/menu';

// ==============================|| DRAWER HEADER ||============================== //

const DrawerHeader = ({ open }) => {
  const theme = useTheme();
  const { defaultId } = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  return (
    // only available in paid version
    <DrawerHeaderStyled theme={theme} open={open}>
      <Stack direction="row" spacing={1} alignItems="center">
      <ButtonBase
      disableRipple
      component={Link}
      onClick={() => dispatch(activeItem({ openItem: [defaultId] }))}
      to="/"
    >
      {<Typography variant="h3">Syn 2 Project</Typography>}
    </ButtonBase>
      </Stack>
    </DrawerHeaderStyled>
  );
};

DrawerHeader.propTypes = {
  open: PropTypes.bool
};

export default DrawerHeader;
