import React, { useState, useEffect } from 'react'
import { Button, Carousel } from 'react-bootstrap'
import { Heading, Image, ScaleFade, Stack, Text } from '@chakra-ui/react'
import AOS from 'aos'
// import 'aos/dist/aos.css'
// import "./HeroSection.css";
const HeroSection = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
    AOS.refresh()
  }
  return (
    <Stack>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        controls={false}
        fade
      >
        <Carousel.Item interval={3000}>
          <Image
            className="d-block w-100"
            src="/Goa-natural/banner/safflower.jpg"
            alt="Safflower"
            height={['200px', '260px', '400px', '450px']}
          />
          <Carousel.Caption>
            <ScaleFade initialScale={0.9} in="true">
              <Text
                className="carousel-head saff-head"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                Safflower Oil
              </Text>
              <Text
                className="carousel-desc saff-desc"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                Keeps the Heart Healthy
              </Text>
              <Button data-aos="fade-up" data-aos-duration="3000">
                Buy Now
              </Button>
            </ScaleFade>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <Image
            className="d-block w-100"
            src="/Goa-natural/banner/turmeric.jpg"
            alt="Turmeric"
            height={['200px', '260px', '400px', '450px']}
          />

          <Carousel.Caption>
            <ScaleFade initialScale={0.9} in="true">
              <Text
                className="carousel-head tur-head"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                Turmeric Powder
              </Text>
              <Text
                className="carousel-desc tur-desc"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                Include Spoonful illusion in your food
              </Text>
              <Button
                data-aos="fade-up"
                data-aos-duration="3000"
                className="tur-btn"
              >
                Buy Now
              </Button>
            </ScaleFade>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <Image
            className="d-block w-100"
            src="/Goa-natural/banner/groundnut.jpg"
            alt="Groundnut"
            height={['200px', '260px', '400px', '450px']}
          />

          <Carousel.Caption>
            <ScaleFade initialScale={0.9} in="true">
              <Text
                className="carousel-head gnd-head"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                Groundnut Oil
              </Text>
              <Text
                className="carousel-desc gnd-desc"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                Dont't Compromise with Health And Taste
              </Text>
              <Button data-aos="fade-up" data-aos-duration="3000">
                Buy Now
              </Button>
            </ScaleFade>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <Image
            className="d-block w-100"
            src="/Goa-natural/banner/coconut.jpg"
            alt="Coconut"
            height={['200px', '260px', '400px', '450px']}
          />
          <Carousel.Caption>
            <ScaleFade initialScale={0.9} in="true">
              <Text
                className="carousel-head coco-head"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                Coconut Oil
              </Text>
              <Text
                className="carousel-desc coco-desc"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                The Real Super Food From Nature
              </Text>
              <Button data-aos="fade-up" data-aos-duration="3000">
                Buy Now
              </Button>
            </ScaleFade>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Stack>
  )
}

export default HeroSection
