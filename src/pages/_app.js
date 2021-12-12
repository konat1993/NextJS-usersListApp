import Layout from '../components/Layout/Layout'
import { ThemeProvider } from '@mui/material'
import { theme } from '../theme/theme'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
