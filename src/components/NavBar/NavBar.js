import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { AppBar, Box, Link as MuiLink, Toolbar, Typography } from "@mui/material"

const sx = {
    bar: {
        backgroundColor: "transparent",
        boxShadow: "none",
        margin: "10px auto 80px",
        borderBottom: "1px solid #ddd"
    },
    toolBar: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        padding: "10px 0",
    },
    link: {
        marginLeft: "12px"
    },
    boxLogo: {
        marginRight: "auto"
    }
}

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
                    <Link href="/list" passHref>
                        <MuiLink sx={sx.link} underline="none" >My List</MuiLink>
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>

    )
}

export default NavBar
