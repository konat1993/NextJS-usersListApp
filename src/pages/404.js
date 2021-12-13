import React from 'react'
import { useRouter } from 'next/router'
import Link from "next/link"
import { Typography, Box, Link as MuiLink } from '@mui/material'

const sx = {
    notFoundLink: {
        color: "info.main",
        fontWeight: "bold"
    }
}

export const NotFound = () => {
    const router = useRouter()

    React.useEffect(() => {
        const timeoutId = setTimeout(() => {
            router.push("/")
        }, 5000);

        return () => clearTimeout(timeoutId)
    }, [router])
    return (
        <Box>
            <Typography variant='h4' gutterBottom>
                Oooops...
            </Typography>
            <Typography variant='h6' gutterBottom>
                That page cannot be found.
            </Typography>
            <Typography variant='body1'>
                Wait 5 seconds for redirection or go back to the <Link href="/" passHref>
                    <MuiLink sx={sx.notFoundLink} underline="none" >Home Page</MuiLink>
                </Link>
            </Typography>
        </Box>
    )
}

export default NotFound
