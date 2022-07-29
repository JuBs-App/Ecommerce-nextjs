import React, { useEffect } from 'react'
import { Image, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import AOS from 'aos'
import Card from '../Card'

const Why = () => {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <SimpleGrid
      columns={[1, 1, 2, 2]}
      spacing={5}
      mt="100px !important"
      backgroundColor="#bde8b5"
    >
      <Image
        src="/Goa-natural/Goa-natural03.png"
        alt="Goa-natural"
        width="100%"
        height="700px"
        alignSelf="center"
        data-aos="fade-right"
        data-aos-duration="1000"
      />
      <Stack>
        <Card backgroundColor="#bde8b5" borderLess={true}>
          <Text
            fontSize="s"
            fontWeight="bold"
            textAlign="center"
            fontFamily="Mochiy Pop P One"
          >
            WHY GOA NATURALS?
          </Text>
          <SimpleGrid columns={[1, 2, 3, 3]} spacing={5}>
            <Stack
              p="5px"
              alignItems="center"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <Image
                src="/onlybest-90.png"
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
              <Text fontSize="xs" color="#746015" p="10px" textAlign="center">
                To create real products, we use carefully selected ingredients
                and unrefined, chemical-free sanitary techniques.
              </Text>
            </Stack>
            <Stack
              p="5px"
              alignItems="center"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <Image
                src="/traditional-90.png"
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
              <Text fontSize="xs" color="#746015" p="10px" textAlign="center">
                To encourage local craft, procedures such as cold pressing,
                stone grinding, mortar and pestle, sun drying, and so on are
                used.
              </Text>
            </Stack>
            <Stack
              p="5px"
              alignItems="center"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <Image
                src="/nutritive-90.png"
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
              <Text fontSize="xs" color="#746015" p="10px" textAlign="center">
                Food that is natural, whole, and unrefined retains more
                nutrients than food that is manufactured conventionally.
              </Text>
            </Stack>
            <Stack
              p="5px"
              alignItems="center"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <Image
                src="/residue-free-90.png"
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
              <Text fontSize="xs" color="#746015" p="10px" textAlign="center">
                After processing, all by-products are fed to livestock, leaving
                nothing behind.
              </Text>
            </Stack>
            <Stack
              p="5px"
              alignItems="center"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <Image
                src="/sustainable-90.png"
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
              <Text fontSize="xs" color="#746015" p="10px" textAlign="center">
                Encourages organic, natural farming methods that benefit and
                safeguard Mother Nature.
              </Text>
            </Stack>
            <Stack
              p="5px"
              alignItems="center"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <Image
                src="/and-only-best-90.png"
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
              <Text fontSize="xs" color="#746015" p="10px" textAlign="center">
                Our goal is to develop not only the best products, but also the
                best way of life.
              </Text>
            </Stack>
          </SimpleGrid>
        </Card>
      </Stack>
    </SimpleGrid>
  )
}

export default Why
