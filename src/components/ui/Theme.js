import { createTheme } from '@mui/material/styles';

const apsBlue = '#42a5f5';
const apsOrange = '#ff9800';

let theme = createTheme({
  palette: {
    common: {
        blue: `${apsBlue}`,
        orange: `${apsOrange}`
    },
    primary: {
      main: `${apsBlue}`,
    },
    secondary: {
      main: `${apsOrange}`,
    },
  },
});

export default theme;