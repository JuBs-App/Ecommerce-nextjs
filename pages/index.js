import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import {
  Button,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import { Carousel } from 'react-bootstrap'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel as Carousel02 } from 'react-responsive-carousel'

const Home = ({ characters }) => {
  return (
    <Stack className={styles.container}>
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
      <Carousel fade>
        <Carousel.Item interval={1000}>
          <Image
            className="d-block w-100"
            src="/Goa-natural/banner/coconut.jpg"
            alt="First slide"
            height="450px"
          />
          {/* <Carousel.Caption>
            <Heading as="h1" size="4xl" noOfLines={1}>
              cold pressed coconut oil
            </Heading>
            <a href="#services">
            <Button className="book-btn">Book Now</Button>
            </a>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <Image
            className="d-block w-100"
            src="/Goa-natural/banner/groundnut.jpg"
            alt="Second slide"
            height="450px"
          />
          {/* <Carousel.Caption>
            <Heading as="h1" size="4xl" noOfLines={1}>
              cold pressed groundnut oil
            </Heading>
            <a href="#services">
            <Button className="book-btn">Book Now</Button>
            </a>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <Image
            className="d-block w-100"
            src="/Goa-natural/banner/safflower.jpg"
            alt="Third slide"
            height="450px"
          />
          {/* <Carousel.Caption>
            <Heading as="h1" size="4xl" noOfLines={1}>
              cold pressed mustard oil
            </Heading>
            <a href="#services">
            <Button className="book-btn">Book Now</Button>
            </a>
          </Carousel.Caption> 
          */}
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <Image
            className="d-block w-100"
            src="/Goa-natural/banner/turmeric.jpg"
            alt="Fourth slide"
            height="450px"
          />
          {/* <Carousel.Caption>
            <Heading as="h1" size="4xl" noOfLines={1}>
              cold pressed coconut oil
            </Heading>
            <a href="#services">
            <Button className="book-btn">Book Now</Button>
            </a>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
      <Stack textAlign="center">
        <Text
          fontSize="5xl"
          fontWeight="bold"
          mt="50px !important"
          fontFamily="Mochiy Pop P One"
        >
          From Farm to Fork
        </Text>
      </Stack>
      <SimpleGrid columns={[1, 2, 4, 4]} spacing={5} p="10px">
        <Stack p="5px" alignItems="center">
          <Card height="100%" backgroundColor="#cc8d89">
            <Image
              src="/handpicked-ingredients.png"
              alt="handpicked-ingredients"
              width="100px"
              height="100px"
              borderRadius="10px"
            />
            <Text
              fontSize="s"
              fontWeight="bold"
              textAlign="center"
              fontFamily="Mochiy Pop P One"
            >
              Ingredients chosen with care
            </Text>
            <Text fontSize="s" p="10px" textAlign="center">
              Ingredients sourced locally and free of genetically engineered
              organisms
            </Text>
          </Card>
        </Stack>

        <Stack p="5px" alignItems="center">
          <Card height="100%" backgroundColor="#cc8d89">
            <Image
              src="/carbon-footprint.jpg"
              alt="carbon-footprint"
              width="125px"
              height="100px"
              borderRadius="10px"
            />
            <Text
              fontSize="s"
              fontWeight="bold"
              textAlign="center"
              fontFamily="Mochiy Pop P One"
            >
              Lowest Carbon Footprint
            </Text>
            <Text fontSize="s" p="10px" textAlign="center">
              Conventional environmentally friendly agriculture and
              agro-processing methods to reduce emissions & pollutants.
            </Text>
          </Card>
        </Stack>
        <Stack p="5px" alignItems="center">
          <Card height="100%" backgroundColor="#cc8d89">
            <Image
              src="/farmer-empowerment.webp"
              alt="empowerment"
              width="125px"
              height="100px"
              borderRadius="10px"
            />
            <Text
              fontSize="s"
              fontWeight="bold"
              textAlign="center"
              fontFamily="Mochiy Pop P One"
            >
              Farmer Empowerment
            </Text>
            <Text fontSize="s" p="10px" textAlign="center">
              Support the livelihood and well-being of local farmers, as well as
              training and employment opportunities for rural Indians,
              particularly women.
            </Text>
          </Card>
        </Stack>
        <Stack p="5px" alignItems="center">
          <Card height="100%" backgroundColor="#cc8d89">
            <Image
              src="/package.png"
              alt="package"
              width="125px"
              height="100px"
              borderRadius="10px"
            />
            <Text
              fontSize="s"
              fontWeight="bold"
              textAlign="center"
              fontFamily="Mochiy Pop P One"
            >
              Lovingly Packed and Delivered
            </Text>
            <Text fontSize="s" p="10px" textAlign="center">
              Genuine food goods that are hygienically packed, hand-labelled,
              and carefully delivered to ensure the finest consumer experience.
            </Text>
          </Card>
        </Stack>
      </SimpleGrid>

      <SimpleGrid
        columns={[1, 1, 2, 2]}
        spacing={5}
        mt="100px !important"
        backgroundColor="#cc8d89"
      >
        <Image
          src="/Goa-natural/Goa-natural03.png"
          alt="Goa-natural"
          width="100%"
          height="700px"
          alignSelf="center"
        />
        <Stack>
          <Card backgroundColor="#cc8d89" borderLess={true}>
            <Text
              fontSize="s"
              fontWeight="bold"
              textAlign="center"
              fontFamily="Mochiy Pop P One"
            >
              WHY GOA NATURALS?
            </Text>
            <SimpleGrid columns={[1, 2, 3, 3]} spacing={5}>
              <Stack p="5px" alignItems="center">
                <Image
                  src="/onlybest.jpg"
                  alt="onlybest"
                  width="100px"
                  height="100px"
                  borderRadius="10px"
                />
                <Text
                  fontSize="s"
                  fontWeight="bold"
                  textAlign="center"
                  fontFamily="Mochiy Pop P One"
                >
                  Only Best Ingredients
                </Text>
                <Text fontSize="s" p="10px" textAlign="center">
                  To create real products, we use carefully selected ingredients
                  and unrefined, chemical-free sanitary techniques.
                </Text>
              </Stack>
              <Stack p="5px" alignItems="center">
                <Image
                  src="/traditional.jpg"
                  alt="traditional"
                  width="100px"
                  height="100px"
                  borderRadius="10px"
                />
                <Text
                  fontSize="s"
                  fontWeight="bold"
                  textAlign="center"
                  fontFamily="Mochiy Pop P One"
                >
                  Traditions Renewed
                </Text>
                <Text fontSize="s" p="10px" textAlign="center">
                  To encourage local craft, procedures such as cold pressing,
                  stone grinding, mortar and pestle, sun drying, and so on are
                  used.
                </Text>
              </Stack>
              <Stack p="5px" alignItems="center">
                <Image
                  src="/nutritive.jpeg"
                  alt="nutritive"
                  width="100px"
                  height="100px"
                  borderRadius="10px"
                />
                <Text
                  fontSize="s"
                  fontWeight="bold"
                  textAlign="center"
                  fontFamily="Mochiy Pop P One"
                >
                  Superior Nutrition
                </Text>
                <Text fontSize="s" p="10px" textAlign="center">
                  Food that is natural, whole, and unrefined retains more
                  nutrients than food that is manufactured conventionally.
                </Text>
              </Stack>
              <Stack p="5px" alignItems="center">
                <Image
                  src="/residue-free.png"
                  alt="residue-free"
                  width="100px"
                  height="100px"
                  borderRadius="10px"
                />
                <Text
                  fontSize="s"
                  fontWeight="bold"
                  textAlign="center"
                  fontFamily="Mochiy Pop P One"
                >
                  Residue-Free
                </Text>
                <Text fontSize="s" p="10px" textAlign="center">
                  After processing, all by-products are fed to livestock,
                  leaving nothing behind.
                </Text>
              </Stack>
              <Stack p="5px" alignItems="center">
                <Image
                  src="/sustainable.png"
                  alt="sustainable"
                  width="100px"
                  height="100px"
                  borderRadius="10px"
                />
                <Text
                  fontSize="s"
                  fontWeight="bold"
                  textAlign="center"
                  fontFamily="Mochiy Pop P One"
                >
                  Sustainability
                </Text>
                <Text fontSize="s" p="10px" textAlign="center">
                  Encourages organic, natural farming methods that benefit and
                  safeguard Mother Nature.
                </Text>
              </Stack>
              <Stack p="5px" alignItems="center">
                <Image
                  src="/and-only-best.png"
                  alt="and-only-best"
                  width="100px"
                  height="100px"
                  borderRadius="10px"
                />
                <Text
                  fontSize="s"
                  fontWeight="bold"
                  textAlign="center"
                  fontFamily="Mochiy Pop P One"
                >
                  The Best Only
                </Text>
                <Text fontSize="s" p="10px" textAlign="center">
                  Our goal is to develop not only the best products, but also
                  the best way of life.
                </Text>
              </Stack>
            </SimpleGrid>
          </Card>
        </Stack>
      </SimpleGrid>
      <Stack width="80%" margin="auto !important">
        <Text
          fontSize="large"
          fontWeight="bold"
          textAlign="center"
          mt="100px !important"
          fontFamily="Mochiy Pop P One"
        >
          Advantages of Cold Pressed Oil
        </Text>
        <SimpleGrid columns={[1, 1, 3, 3]} spacing={5}>
          <Stack flexDirection="column">
            <Stack>
              <Text
                fontSize="s"
                fontWeight="bold"
                textAlign="right"
                mt="20px"
                width="120px"
                alignSelf="end"
              >
                No additives, no refinement
              </Text>
              <Text
                fontSize="xs"
                color="#808285"
                textAlign="right"
                width="210px"
                alignSelf="end"
              >
                Traditional wood presses are used to extract oils, which include
                crushing the oil seeds at low temperatures without the use of
                chemicals.
              </Text>
            </Stack>
            <Stack>
              <Text
                fontSize="s"
                fontWeight="bold"
                textAlign="right"
                mt="20px"
                width="150px"
                alignSelf="end"
              >
                Free of Cholesterol
              </Text>
              <Text
                fontSize="xs"
                color="#808285"
                textAlign="right"
                width="210px"
                alignSelf="end"
              >
                Cholesterol-free, which offers a better alternative to refined
                oil and relief from cardiovascular issues.
              </Text>
            </Stack>
            <Stack>
              <Text
                fontSize="s"
                fontWeight="bold"
                textAlign="right"
                mt="20px"
                width="150px"
                alignSelf="end"
              >
                Rich in Nutrients
              </Text>
              <Text
                fontSize="xs"
                color="#808285"
                textAlign="right"
                width="210px"
                alignSelf="end"
              >
                The cold pressing procedure preserves the flavour, aroma, and
                nutritional value of the seeds/nuts, making these oils
                beneficial to your health.
              </Text>
            </Stack>
          </Stack>
          <Stack boxShadow="lg" boxShadowColor="#6b7d70" mt="40px">
            <Carousel02
              autoPlay={true}
              autoFocus={true}
              infiniteLoop={true}
              showStatus={false}
            >
              <Stack>
                <Image
                  src="/item-pics/1ltr-coconut-front.jpg"
                  alt="1ltr-coconut-front"
                  width="100%"
                  height={['500px', '500px', '350px', '350px']}
                  borderRadius="10px"
                  borderWidth="thin"
                  boxShadow="lg"
                  boxShadowColor="#6b7d70"
                />
              </Stack>
              <Stack>
                <Image
                  src="/item-pics/1ltr-coconut-back.jpg"
                  alt="1ltr-coconut-back"
                  width="100%"
                  height={['500px', '500px', '350px', '350px']}
                  borderRadius="10px"
                  boxShadow="lg"
                  boxShadowColor="#6b7d70"
                />
              </Stack>
              <Stack>
                <Image
                  src="/item-pics/1ltr-groundnut-front.jpg"
                  alt="1ltr-groundnut-front"
                  width="100%"
                  height={['500px', '500px', '350px', '350px']}
                  borderRadius="10px"
                  boxShadow="lg"
                  boxShadowColor="#6b7d70"
                />
              </Stack>
              <Stack>
                <Image
                  src="/item-pics/1ltr-groundnut-back.jpg"
                  alt="1ltr-groundnut-back"
                  width="100%"
                  height={['500px', '500px', '350px', '350px']}
                  borderRadius="10px"
                  boxShadow="lg"
                  boxShadowColor="#6b7d70"
                />
              </Stack>
              <Stack>
                <Image
                  src="/item-pics/1ltr-safflower-front.jpg"
                  alt="1ltr-safflower-front"
                  width="100%"
                  height={['500px', '500px', '350px', '350px']}
                  borderRadius="10px"
                  boxShadow="lg"
                  boxShadowColor="#6b7d70"
                />
              </Stack>
              <Stack>
                <Image
                  src="/item-pics/1ltr-safflower-back.jpg"
                  alt="1ltr-safflower-back"
                  width="100%"
                  height={['500px', '500px', '350px', '350px']}
                  borderRadius="10px"
                  boxShadow="lg"
                  boxShadowColor="#6b7d70"
                />
              </Stack>
              <Stack>
                <Image
                  src="/item-pics/500ml-coconut-front.jpg"
                  alt="500ml-coconut-front"
                  width="100%"
                  height={['500px', '500px', '350px', '350px']}
                  borderRadius="10px"
                  boxShadow="lg"
                  boxShadowColor="#6b7d70"
                />
              </Stack>
              <Stack>
                <Image
                  src="/item-pics/500ml-coconut-back.jpg"
                  alt="500ml-coconut-back"
                  width="100%"
                  height={['500px', '500px', '350px', '350px']}
                  borderRadius="10px"
                  boxShadow="lg"
                  boxShadowColor="#6b7d70"
                />
              </Stack>
              <Stack>
                <Image
                  src="/item-pics/500ml-safflower-front.jpg"
                  alt="500ml-safflower-front"
                  width="100%"
                  height={['500px', '500px', '350px', '350px']}
                  borderRadius="10px"
                  boxShadow="lg"
                  boxShadowColor="#6b7d70"
                />
              </Stack>
              <Stack>
                <Image
                  src="/item-pics/500ml-safflower-back.jpg"
                  alt="500ml-safflower-back"
                  width="100%"
                  height={['500px', '500px', '350px', '350px']}
                  borderRadius="10px"
                  boxShadow="lg"
                  boxShadowColor="#6b7d70"
                />
              </Stack>
            </Carousel02>
          </Stack>
          <Stack flexDirection="column">
            <Stack>
              <Text
                fontSize="s"
                fontWeight="bold"
                textAlign="left"
                mt="20px"
                width="120px"
              >
                Completely RAW
              </Text>
              <Text
                fontSize="xs"
                color="#808285"
                textAlign="left"
                width="210px"
              >
                Fruits, nuts, and seeds in their purest form! That is the only
                ingredient in our oils, and it is incredibly pure and raw.
              </Text>
            </Stack>
            <Stack>
              <Text
                fontSize="s"
                fontWeight="bold"
                textAlign="left"
                mt="20px"
                width="150px"
              >
                Plenty with antioxidants
              </Text>
              <Text
                fontSize="xs"
                color="#808285"
                textAlign="left"
                width="210px"
              >
                Vitamin C, Vitamin E, and beta-carotene, which are beneficial
                for skincare and anti-aging, may all be obtained naturally from
                organic antioxidants.
              </Text>
            </Stack>
            <Stack>
              <Text
                fontSize="s"
                fontWeight="bold"
                textAlign="left"
                mt="20px"
                width="150px"
              >
                Trans-Fat Free
              </Text>
              <Text
                fontSize="xs"
                color="#808285"
                textAlign="left"
                width="210px"
              >
                Trans-fat is not present in cold-pressed oil because there is
                neither heating nor chemical processing.
              </Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Stack>
    </Stack>
  )
}

const Card = ({ children, borderLess = false, ...props }) => {
  return (
    <Stack
      p={8}
      borderRadius="md"
      bg="white"
      boxShadow={borderLess ? 'none' : 'md'}
      borderColor="gray.200"
      borderWidth={borderLess ? 0 : 1}
      alignItems="center"
      {...props}
    >
      {children}
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
