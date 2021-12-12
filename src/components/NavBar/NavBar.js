import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { AppBar, Box, Link as MuiLink, Toolbar, Typography } from "@mui/material"

import { sx } from "./NavBarStyles"

export const NavBar = () => {
    return (
        <AppBar position="static" sx={sx.bar}>
            <Toolbar sx={sx.toolBar} >
                <Box sx={sx.boxLogo}>
                    <Typography variant="h6">
                        <Image src="/vercel.svg" alt="vercel" width={150} height={40} />
                    </Typography>
                </Box>
                <Box >
                    <Link href="/" passHref>
                        <MuiLink underline="none" >Home</MuiLink>
                    </Link>
                    <Link href="/about" passHref>
                        <MuiLink sx={sx.link} underline="none" >About</MuiLink>
                    </Link>
                    <Link href="/users" passHref>
                        <MuiLink sx={sx.link} underline="none" >My Users List</MuiLink>
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>

    )
}

export default NavBar
