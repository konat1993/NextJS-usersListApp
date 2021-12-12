import Head from "next/head"
import Link from "next/link"
import { Box, Grid, Typography } from "@mui/material";

import { sx } from "../../styles/pages/indexUsersStyles"

export const Users = ({ users }) => {
    return (
        <>
            <Head>
                <meta name='keywords' content='NextJS vercel' />
                <title>Next JS App | Users</title>
            </Head>
            <Box>
                <Typography sx={sx.usersHeader} variant="h3">
                    All Users Items:
                </Typography>
                <Box >
                    <Grid

                        container
                        spacing={2}
                        direction="column"
                        alignItems="left"
                    >
                        {
                            users && users.map((user) => (
                                <Grid key={user.id} item>
                                    <Link href={`/users/${user.id}`} passHref>
                                        <Box sx={sx.usersContainer}>
                                            {user.name}
                                        </Box>
                                    </Link>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Box>
            </Box>
        </>
    );
}

export const getStaticProps = async () => {
    const URL = 'https://jsonplaceholder.typicode.com/users'
    const response = await fetch(URL)
    const data = await response.json()
    return {
        props: {
            users: data
        }
    }
}

export default Users;