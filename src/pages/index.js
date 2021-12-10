import Head from 'next/head'
import { Box, Button, Typography } from '@mui/material'
import Link from 'next/link'

const sx = {
  container: {
    padding: "0 0.5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  homeTitle: {
    paddingBottom: "20px"
  },
  homeText: {
    color: "#777"
  },
  homeBtn: {
    width: "150px",
    padding: "8px 0",
    margin: "20px auto",
    color: "white",
    '&.MuiButton-root:hover': {
      backgroundColor: "info.main"
    }
  }
}

export default function Home() {
  return (
    <>
      <Head>
        <meta name='keywords' content='NextJS vercel' />
        <title>Next JS App | Home</title>
      </Head>
      <Box sx={sx.container}>
        <Typography sx={sx.homeTitle} variant="h3">
          Homepage
        </Typography>
        <Typography sx={sx.homeText} variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in viverra velit. Curabitur a velit dolor. Donec sagittis quam id gravida luctus. Pellentesque scelerisque urna nulla, nec hendrerit ante posuere at. Proin interdum fringilla rutrum. Morbi vel lobortis elit. Cras felis arcu, molestie in molestie a, lacinia ac nibh. Phasellus quis dolor nec tellus aliquam bibendum nec in urna. Nulla facilisi. Praesent elementum tellus lectus, elementum consectetur ante dignissim ac.
        </Typography>

        <Link href="/ninjas" passHref>
          <Button sx={sx.homeBtn} variant='contained' color="info">See My List</Button>
        </Link>
      </Box>
    </>
  )
}
