import Head from 'next/head'
import { Box, Button, Typography } from '@mui/material'
import Link from 'next/link'

import {sx} from "../styles/pages/indexHomeStyles"

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

        <Link href="/users" passHref>
          <Button sx={sx.homeBtn} variant='contained' color="info">See My Users List</Button>
        </Link>
      </Box>
    </>
  )
}
