import React, { useEffect } from 'react'
import { Image, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import AOS from 'aos'
import Card from '../Card'

const FarmToFork = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <Stack textAlign="center" data-aos="fade-right" data-aos-duration="1000">
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
          <Card
            height="100%"
            backgroundColor="#bde8b5"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <Image
              src="/handpicked-ingredients.jpg"
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
            <Text fontSize="s" color="#746015" p="10px" textAlign="center">
              Ingredients sourced locally and free of genetically engineered
              organisms
            </Text>
          </Card>
        </Stack>

        <Stack p="5px" alignItems="center">
          <Card
            height="100%"
            backgroundColor="#bde8b5"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <Image
              src="/carbon-footprint.jpg"
              alt="carbon-footprint"
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
              Lowest Carbon Footprint
            </Text>
            <Text fontSize="s" color="#746015" p="10px" textAlign="center">
              Conventional environmentally friendly agriculture and
              agro-processing methods to reduce emissions & pollutants.
            </Text>
          </Card>
        </Stack>
        <Stack p="5px" alignItems="center">
          <Card
            height="100%"
            backgroundColor="#bde8b5"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <Image
              src="/empowerment.jpg"
              alt="empowerment"
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
              Farmer Empowerment
            </Text>
            <Text fontSize="s" color="#746015" p="10px" textAlign="center">
              Support the livelihood and well-being of local farmers, as well as
              training and employment opportunities for rural Indians,
              particularly women.
            </Text>
          </Card>
        </Stack>
        <Stack p="5px" alignItems="center">
          <Card
            height="100%"
            backgroundColor="#bde8b5"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <Image
              src="/package.jpg"
              alt="package"
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
              Lovingly Packed and Delivered
            </Text>
            <Text fontSize="s" color="#746015" p="10px" textAlign="center">
              Genuine food goods that are hygienically packed, hand-labelled,
              and carefully delivered to ensure the finest consumer experience.
            </Text>
          </Card>
        </Stack>
      </SimpleGrid>
    </>
  )
}

export default FarmToFork
