import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#333"
        },
        secondary: {
            main: "#999"
        },
        info: {
            main:"#4979ff"
        }
    },
    typography: {
        fontFamily: `"Nunito", "Helvetica", "Arial", sans-serif`,
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: "#333",
                    textAlign: "center"
                }
            }
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    color: "#333",
                    fontFamily: `"Nunito", "Helvetica", "Arial", sans-serif`,
                }
            }
        }
    }
})

// console.log(theme)