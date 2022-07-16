import React, { Children, ReactNode } from 'react'
import {
  Box,
  Button,
  chakra,
  Flex,
  HStack,
  IconButton,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import { css } from '@emotion/react'
import Link from 'next/link'
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { FaTwitter, FaInstagram } from 'react-icons/fa'
import { MdLocationOn, MdEmail, MdSmartphone, MdFacebook } from 'react-icons/md'
import FloatingWhatsapp from './FloatingWhatsapp'
// import { Avatar, Badge } from 'antd'

const Links = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Contact Us',
    path: '/contact-us',
  },
  {
    name: 'About Us',
    path: '/about-us',
  },
  {
    name: 'Login',
    path: '/login',
  },
]

const NavLink = ({ children, path }) => (
  <Box
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
  >
    <Link href={path}>{children}</Link>
  </Box>
)

function Layout({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Stack backgroundColor="#9dfaf7">
      <chakra.header id="header">
        <Flex w="100%" px="6" py="5" align="center" justify="space-between">
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Image src={'/Goa-natural/logo.png'} h="50px" />

          <HStack as="nav" spacing="5" display={{ base: 'none', md: 'flex' }}>
            <Link href="/">
              <Button variant="nav"> Home </Button>
            </Link>
            <Link href="/about-us">
              <Button variant="nav"> About us </Button>
            </Link>
            <Link href="/contact-us">
              <Button variant="nav"> Contact us </Button>
            </Link>
            <Link href="/login">
              <Button variant="nav"> Login </Button>
            </Link>
          </HStack>

          <HStack>
            {/* <Badge
              count={5}
              style={{
                position: 'absolute',
                right: 0,
                top: 0,
                backgroundColor: '#e01709',
              }}
            >
              <Avatar
                shape="square"
                size="large"
                style={{ backgroundColor: '#e01709' }}
              >
                <AiOutlineShoppingCart />
              </Avatar>
            </Badge> */}
            <IconButton
              css={css`
                position: relative !important;
              `}
              py={'2'}
              colorScheme={'#9dfaf7'}
              color="black"
              aria-label={'Notifications'}
              size={'lg'}
              icon={
                <>
                  <AiOutlineShoppingCart color={'gray.750'} />
                  <Box
                    as={'span'}
                    color={'white'}
                    position={'absolute'}
                    top={'6px'}
                    right={'4px'}
                    fontSize={'0.7rem'}
                    bgColor={'red'}
                    borderRadius={'10px'}
                    zIndex={9999}
                    p={'1px'}
                  >
                    {5}
                  </Box>
                </>
              }
            />
          </HStack>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map(({ name, path }) => (
                <NavLink key={path} path={path}>
                  {name}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </chakra.header>
      {children}
      <FloatingWhatsapp />
      <Footer />
    </Stack>
  )
}

const Footer = () => {
  return (
    <Stack backgroundColor="#2d2d2d">
      <SimpleGrid
        columns={[1, 1, 3, 3]}
        spacing={15}
        p="50px"
        width={['100%', '100%', '80%', '80%']}
        margin="auto"
      >
        <Stack flexDirection="column" paddingBottom="30px">
          <Text fontWeight="bold" fontSize="s" color="white">
            GOA NATURAL OIL
          </Text>
          <Text fontSize="xs" color="#a4a4a4" paddingBottom="20px" width="71%">
            Whether you have questions about our products, pricing, or anything
            else, our team is ready to attend you.
          </Text>
          <MdLocationOn color="white" />
          <Text fontSize="xs" color="#a4a4a4" paddingBottom="20px" width="71%">
            At Post Vele, Besides Hotel Aram Regency, Pune-Bangalore highway,
            Opp. HP Petroleum, Satara Maharashtra 415517 India
          </Text>
          <MdEmail color="white" />
          <Text fontSize="xs" color="#a4a4a4" paddingBottom="20px">
            info@orgatma.com | support@orgatma.com
          </Text>
          <Stack flexDirection="row" alignItems="center">
            <MdSmartphone color="white" />
            <Text fontSize="xs" color="#a4a4a4" paddingLeft="10px">
              +91 89562 36956
            </Text>
          </Stack>
        </Stack>
        <Stack flexDirection="column" paddingBottom="30px">
          <Text fontWeight="bold" fontSize="s" color="white">
            QUICK LINKS
          </Text>
          <Link href="/about-us">
            <Text fontSize="xs" color="#a4a4a4">
              About us
            </Text>
          </Link>
          <Link href="/contact-us">
            <Text fontSize="xs" color="#a4a4a4">
              Contact us
            </Text>
          </Link>
          <Link href="/products">
            <Text fontSize="xs" color="#a4a4a4">
              View all products
            </Text>
          </Link>
          <Link href="/blog">
            <Text fontSize="xs" color="#a4a4a4">
              Blog
            </Text>
          </Link>
        </Stack>
        <Stack flexDirection="column" paddingBottom="30px">
          <Text fontWeight="bold" fontSize="s" color="white">
            Follow us on Social Media
          </Text>
          <Stack flexDirection="row">
            <Stack mt="0px !important" paddingRight="5px">
              <Link href="">
                <MdFacebook color="white" />
              </Link>
            </Stack>
            <Stack mt="0px !important" paddingRight="5px">
              <Link href="">
                <FaTwitter color="white" />
              </Link>
            </Stack>
            <Stack mt="0px !important" paddingRight="5px">
              <Link href="">
                <FaInstagram color="white" />
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Stack>
  )
}

export default Layout
