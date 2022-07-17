import React, { Children, ReactNode } from 'react'
import {
  Box,
  Button,
  chakra,
  Flex,
  HStack,
  IconButton,
  Image,
  Input,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
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
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
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

  const {
    isOpen: isOpenOnHover,
    onOpen: onOpenOnHover,
    onClose: onCloseOnHover,
  } = useDisclosure()

  return (
    <Stack backgroundColor="#93e683">
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
            <Menu isOpen={isOpenOnHover}>
              <MenuButton
                variant="ghost"
                mx={1}
                py={[1, 2, 2]}
                px={4}
                borderRadius={5}
                _hover={{ bg: useColorModeValue('gray.100', 'gray.700') }}
                aria-label="Courses"
                fontWeight="normal"
                onMouseEnter={onOpenOnHover}
                onMouseLeave={onCloseOnHover}
              >
                Products{' '}
                {isOpenOnHover ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </MenuButton>
              <MenuList
                onMouseEnter={onOpenOnHover}
                onMouseLeave={onCloseOnHover}
                zIndex="200"
              >
                <MenuItem>Coconut oil</MenuItem>
                <MenuItem>Groundnut oil</MenuItem>
                <MenuItem>Safflower oil</MenuItem>
                <MenuItem>Turmeric powder</MenuItem>
              </MenuList>
            </Menu>
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
            GOA NATURAL
          </Text>
          <Text fontSize="xs" color="#a4a4a4" paddingBottom="20px" width="71%">
            The Original Cold Pressed Oil from Goa, India
          </Text>
          <MdLocationOn color="white" />
          <Text fontSize="xs" color="#a4a4a4" paddingBottom="20px" width="71%">
            Plot 34, Kakoda Industrial Estate – Phase III, Kakoda, Curchorem,
            Goa, India 403706
          </Text>
          <MdEmail color="white" />
          <Text fontSize="xs" color="#a4a4a4" paddingBottom="20px">
            adwingoa@gmail.com | goanatural2222@gmail.com
          </Text>
          <Stack flexDirection="row" alignItems="center">
            <MdSmartphone color="white" />
            <Text fontSize="xs" color="#a4a4a4" paddingLeft="10px">
              9822168979 | 8007774122 | 8605070650
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
          <Link href="/rewards">
            <Text fontSize="xs" color="#a4a4a4">
              Rewards
            </Text>
          </Link>
          <Stack mt="30px !important">
            <Text fontWeight="bold" fontSize="s" color="white">
              Follow us on Social Media
            </Text>
            <Stack flexDirection="row">
              <Stack mt="0px !important" paddingRight="5px">
                <Link href="https://facebook.com/" passHref>
                  <MdFacebook color="white" />
                </Link>
              </Stack>
              <Stack mt="0px !important" paddingRight="5px">
                <Link href="https://twitter.com/" passHref>
                  <FaTwitter color="white" />
                </Link>
              </Stack>
              <Stack mt="0px !important" paddingRight="5px">
                <Link href="https://www.instagram.com/" passHref>
                  <FaInstagram color="white" />
                </Link>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack flexDirection="column" paddingBottom="30px">
          <Text fontWeight="bold" fontSize="s" color="white">
            NEWSLETTER
          </Text>
          <Text fontSize="xs" color="#a4a4a4" paddingBottom="20px">
            Subscribe to our newsletter & stay updated about latest products,
            offers and blogs
          </Text>
          <Input
            placeholder="Enter email address"
            backgroundColor="white"
            borderRadius="0px"
          />
          <Button colorScheme="green" width="fit-content" borderRadius="0px">
            Subscribe
          </Button>

          <Text
            fontWeight="bold"
            fontSize="s"
            color="white"
            mt="30px !important"
          >
            We are also available on…
          </Text>
          <Stack flexDirection="row">
            <Link href="https://www.amazon.in">
              <Image src="/mini-amazon.png" h="30px" w="75px" />
            </Link>
            <Link href="https://www.flipkart.com">
              <Image
                src="/mini-flipkart.png"
                h="30px"
                w="75px"
                mt="0px !important"
              />
            </Link>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Stack>
  )
}

export default Layout
