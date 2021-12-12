import React from 'react'
import { Divider, Grid, Stack, Paper, Typography } from '@mui/material'

const sx = {
    userPaper: {
        minWidth: "400px",
        minHeight: "200px",
        padding: "20px",
        backgroundColor: "rgba(0,0,0,0.15)"
    }
}

export const userDetails = ({ userData }) => {
    const user = userData[0]
    console.log(user)
    return (
        <Stack
            alignItems="center"
            spacing={2}
        >
            <Paper sx={sx.userPaper} elevation={6}>
                <Grid container direction="column">
                    <Grid container item direction="column" alignItems={{ xs: "center" }}>
                        <Grid item >
                            <Typography>
                                {user.name}
                            </Typography>
                        </Grid>
                        <Grid item >
                            <Typography variant='caption'>
                                {user.email}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container direction="row">
                        <Grid container xs={5} item mt={2} direction="column" alignItems="flex-start">
                            <Grid item>
                                <Typography variant="h6" sx={{fontWeight: "bold"}}>
                                    Company:
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body1" component="h1" sx={{ textAlign: "left" }}>
                                    {user.company.bs} - {user.company.name}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item xs={2} justifyContent="center" alignItems="center">
                            <Divider orientation="vertical" sx={{ height: "100px", mt: 2 }} flexItem />
                        </Grid>
                        <Grid container xs={5} item direction="column" justifyContent="center">
                            <Grid item >
                                <Typography variant="h6" sx={{fontWeight: "bold"}}>
                                    Address:
                                </Typography>
                            </Grid>
                            <Grid item >
                                <Typography variant="body1">
                                    {user.address.street}
                                </Typography>
                                <Typography variant="body2">
                                    {user.address.city}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Stack >
    )
}

export const getStaticPaths = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const userData = await response.json()

    const userPath = userData.map((user) => {
        return { params: { userId: user.id.toString() } }
    })
    return {
        paths: userPath,
        fallback: false
    }
}
export const getStaticProps = async ({ params: { userId } }) => {
    console.log("userId ", userId)
    const response = await fetch(`https://jsonplaceholder.typicode.com/users?id=${userId}`)
    const userData = await response.json()
    return {
        props: {
            userData: userData
        }
    }
}

export default userDetails
