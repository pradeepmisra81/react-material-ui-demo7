import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';

const ElevationScroll = (props) => {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

const Header = (props) => {
    return (
        <ElevationScroll>
        <AppBar>
            <Toolbar>
                dApps Development
            </Toolbar>
        </AppBar>
        </ElevationScroll>
    );
}

export default Header;