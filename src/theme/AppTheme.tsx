import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { HigherOrderComponentBaseProps } from "../interfaces/HigherOrderComponentBaseProps"
import { purpleTheme } from "./purpleTheme"

export const AppTheme = ({children} : HigherOrderComponentBaseProps) => {
    return (
        <ThemeProvider theme={purpleTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}
