import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    bg: true;
    lg: true;
    xl: true;
  }
}

const BreakPointTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      bg: 1150,
      lg: 1200,
      xl: 1536,
    },
  },
});

export { BreakPointTheme };
