import React, { useState, useEffect } from 'react'
import { Button, Carousel } from 'react-bootstrap'
import { Heading, Image, Stack, Text } from '@chakra-ui/react'
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
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <Image
            className=""
            src="/Goa-natural/banner/safflower.jpg"
            alt="Safflower"
          />
          <Carousel.Caption>
            <p
              className="carousel-head saff-head"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Safflower Oil
            </p>
            <p
              className="carousel-desc saff-desc"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Keeps the Heart Healthy
            </p>
            <Button data-aos="fade-up" data-aos-duration="3000">
              Buy Now
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className=""
            src="/Goa-natural/banner/turmeric.jpg"
            alt="Turmeric"
          />

          <Carousel.Caption>
            <p
              className="carousel-head tur-head"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Turmeric Powder
            </p>
            <p
              className="carousel-desc tur-desc"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Include Spoonful illusion in your food
            </p>
            <Button
              data-aos="fade-up"
              data-aos-duration="3000"
              className="tur-btn"
            >
              Buy Now
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className=""
            src="/Goa-natural/banner/groundnut.jpg"
            alt="Groundnut"
          />

          <Carousel.Caption>
            <p
              className="carousel-head gnd-head"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Groundnut Oil
            </p>
            <p
              className="carousel-desc gnd-desc"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Dont't Compromise with Health And Taste
            </p>
            <Button data-aos="fade-up" data-aos-duration="3000">
              Buy Now
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className=""
            src="/Goa-natural/banner/coconut.jpg"
            alt="Coconut"
          />
          <Carousel.Caption>
            <p
              className="carousel-head coco-head"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Coconut Oil
            </p>
            <p
              className="carousel-desc coco-desc"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              The Real Super Food From Nature
            </p>
            <Button data-aos="fade-up" data-aos-duration="3000">
              Buy Now
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Stack>
  )
}

export default HeroSection
