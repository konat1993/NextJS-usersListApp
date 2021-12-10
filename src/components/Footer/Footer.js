import React from 'react'
import { Box, Typography } from '@mui/material'

const sx = {
    footerContainer: {
        padding: "30px 0",
        marginTop: "60px",
        borderTop: "1px solid #eaeaea"
    },
    footerText: {
        color: "#777"
    },
    footerImg: {},
    footerLink: {},
    footerTitle: {}
}

export const Footer = () => {
    return (
        <Box sx={sx.footerContainer}>
            <Typography sx={sx.footerText} variant='body1'>
                Copyright 2021 Ninja List
            </Typography>
        </Box>
    )
}

export default Footer
