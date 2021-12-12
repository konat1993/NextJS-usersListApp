import React from 'react'
import { Box, Typography } from '@mui/material'

import { sx } from "./FooterStyles"

export const Footer = () => {
    return (
        <Box sx={sx.footerContainer}>
            <Typography sx={sx.footerText} variant='body1'>
                Copyright 2021 Users List
            </Typography>
        </Box>
    )
}

export default Footer
