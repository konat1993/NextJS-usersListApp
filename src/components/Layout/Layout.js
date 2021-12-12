import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { Box } from '@mui/material'

import { sx } from "./LayoutStyles"

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
