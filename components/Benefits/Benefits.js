import React from 'react'

const Benefits = () => {
  return (
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
              Cholesterol-free, which offers a better alternative to refined oil
              and relief from cardiovascular issues.
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
              nutritional value of the seeds/nuts, making these oils beneficial
              to your health.
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
            <Text fontSize="xs" color="#808285" textAlign="left" width="210px">
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
            <Text fontSize="xs" color="#808285" textAlign="left" width="210px">
              Vitamin C, Vitamin E, and beta-carotene, which are beneficial for
              skincare and anti-aging, may all be obtained naturally from
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
            <Text fontSize="xs" color="#808285" textAlign="left" width="210px">
              Trans-fat is not present in cold-pressed oil because there is
              neither heating nor chemical processing.
            </Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Stack>
  )
}

export default Benefits
