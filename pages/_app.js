import '../styles/globals.css'
import 'aos/dist/aos.css'
import '../components/HeroSection/HeroSection.css'
import '../components/FarmToFork/FarmToFork.css'
import '../components/Why/Why.css'
import theme from '../styles/theme'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { StoreProvider } from '../utils/Store'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <StoreProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StoreProvider>
    </ChakraProvider>
  )
}
export default MyApp
