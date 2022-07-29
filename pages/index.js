import { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
// import styles from '../styles/Home.module.css'
import {
  Button,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import HeroSection from '../components/HeroSection/HeroSection'
import FarmToFork from '../components/FarmToFork/FarmToFork'
import Why from '../components/Why/Why'
import Benefits from '../components/Benefits/Benefits'

const Home = ({ characters }) => {
  return (
    <Stack>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Mochiy+Pop+P+One&display=swap"
          rel="stylesheet"
        />
      </Head>

      <hr />
      <HeroSection />
      <FarmToFork />
      <Why />
      <Benefits />
    </Stack>
  )
}

export const getStaticProps = async (context) => {
  // const res = await fetch('https://rickandmortyapi.com/api/character')
  // const { results }: GetCharacterResults = await res.json()
  return {
    props: {
      characters: [],
    },
  }
}

export default Home
