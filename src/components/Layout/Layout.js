import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { Box } from '@mui/material'

const sx = {
    layoutBox: {
        maxWidth: "960px",
        margin: "0 auto"
    }
}

export const Layout = ({ children }) => {
    return (
        <Box sx={sx.layoutBox}>
            <NavBar />
            {children}
            <Footer />
        </Box>
    )
}

export default Layout
