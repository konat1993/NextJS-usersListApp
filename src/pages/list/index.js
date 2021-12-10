import Head from "next/head"
import { Box, Typography } from "@mui/material";

const sx = {}

const List = () => {
    return (
        <>
        <Head>
        <meta name='keywords' content='NextJS vercel' />
        <title>Next JS App | List</title>
      </Head>
        <Box>
            <Typography variant="h3">
                All List Items
            </Typography>
        </Box>
        </>
    );
}

export default List;