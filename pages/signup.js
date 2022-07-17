import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react'
import axios from 'axios'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import { Store } from '../utils/Store'
import Cookies from 'js-cookie'
import { useFormik } from 'formik'
import { getError } from '../utils/error'
import { FiArrowRight, FiLock, FiUnlock } from 'react-icons/fi'
import { signUp } from '../validations'
// import zxcvbn from 'zxcvbn'

const Login = (props) => {
  const toast = useToast()
  const router = useRouter()
  const { redirect } = router.query // login?redirect=/shipping
  const { state, dispatch } = useContext(Store)
  const { userInfo } = state
  useEffect(() => {
    if (userInfo) {
      router.push('/')
    }
  }, [userInfo])

  const [isPasswordShown, setIsPasswordShown] = useState(false)
  // const [passwordStrength, setPasswordStrength] = useState(null)
  const [loading, setLoading] = useState(false)

  const formik = useFormik({
    validationSchema: signUp,
    initialValues: {
      name: '',
      phone: '',
      email: '',
      password: '',
    },
    onSubmit: async (values, helpers) => {
      try {
        setLoading(true)
        const { data } = await axios.post('/api/users/login', {
          email: values.email,
          password: values.password,
        })
        setLoading(false)
        dispatch({ type: 'USER_LOGIN', payload: data })
        Cookies.set('userInfo', JSON.stringify(data))
        router.push(redirect || '/')
      } catch (e) {
        let error = e?.message

        toast({
          position: 'top-right',
          title: 'Unable to login.',
          description: error,
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      }
      // })
    },
    onReset: () => {},
  })

  let passwordColorScheme = 'gray'

  return (
    <Stack align="center">
      <Head>
        <title>Sign in to Goa natural</title>
      </Head>
      <SimpleGrid
        columns={[1, 1, 2, 2]}
        w={['100%', '100%', '80%', '80%']}
        margin="auto"
        spacing={5}
        p="10px"
        backgroundColor="#bde8b5"
      >
        <Image
          src="/Goa-natural/Goa-natural03.png"
          alt="Goa-natural"
          width="100%"
          height="500px"
          alignSelf="center"
        />
        <Stack justify="center">
          <Stack
            flex={2}
            id="signup-form"
            as="form"
            width="100%"
            onSubmit={() => {
              formik.handleSubmit()
            }}
            spacing={4}
            p={8}
            bg="white"
            overflowX="hidden"
            overflowY="auto"
            justify="center"
          >
            {/*  <Image src={logo} alt="logo" />*/}

            <Text fontSize="xl" fontWeight="bold">
              Get Started
            </Text>

            <Stack>
              <Stack flexDir="row" align="baseline">
                <FormControl
                  isRequired
                  marginRight={4}
                  isInvalid={formik.errors.name && formik.touched.name}
                >
                  <FormLabel htmlFor="name" fontSize="xs">
                    Name
                  </FormLabel>
                  <Input
                    type="text"
                    id="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    size="sm"
                    fontSize="xs"
                  />
                  <FormHelperText fontSize="xs">
                    This should be your name
                  </FormHelperText>
                  <FormErrorMessage fontSize="xs">
                    {formik.errors?.name}
                  </FormErrorMessage>
                </FormControl>

                <FormControl
                  isRequired
                  isInvalid={formik.errors.phone && formik.touched.phone}
                >
                  <FormLabel htmlFor="email" fontSize="xs">
                    Phone
                  </FormLabel>
                  <Input
                    type="text"
                    id="phone"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                    size="sm"
                    fontSize="xs"
                  />
                  <FormHelperText fontSize="xs">
                    You must add country code in front (eg:'+1')
                  </FormHelperText>
                  <FormErrorMessage>{formik.errors?.phone}</FormErrorMessage>
                </FormControl>
              </Stack>

              <FormControl
                isRequired
                width="100%"
                isInvalid={formik.errors.email && formik.touched.email}
              >
                <FormLabel htmlFor="email" fontSize="xs">
                  Email address
                </FormLabel>
                <Input
                  type="email"
                  id="email"
                  size="sm"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  fontSize="xs"
                />
                <FormHelperText fontSize="xs">Your Email</FormHelperText>
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>

              <FormControl
                isRequired
                width="100%"
                isInvalid={formik.errors.password && formik.touched.password}
              >
                <FormLabel htmlFor="password" fontSize="xs">
                  Password
                </FormLabel>
                <InputGroup
                  size="sm"
                  //@ts-ignore
                  placeholder="Enter your password"
                >
                  <Input
                    type={isPasswordShown ? 'text' : 'password'}
                    id="password"
                    size="sm"
                    fontSize="xs"
                    onChange={async (e) => {
                      const password = e.target.value

                      formik.setFieldValue('password', password)

                      // const testedResult = await zxcvbn(password)
                      // const allow = testedResult?.score > 3
                      // let warning = testedResult.feedback.warning

                      // if (!warning && !allow) {
                      //   warning =
                      //     'Your password is too weak, Please pick a password with min 10 characters'
                      // }

                      // setPasswordStrength({ ...testedResult, allow, warning })
                    }}
                    value={formik.values.password}
                    colorScheme={passwordColorScheme}
                  />

                  <InputRightElement width="4.5rem">
                    <Button
                      size="sm"
                      fontSize="xs"
                      fontWeight="normal"
                      variant="unstyled"
                      display="flex"
                      flexDirection="row"
                      alignItems="center"
                      textAlign="center"
                      verticalAlign="middle"
                      rightIcon={isPasswordShown ? <FiLock /> : <FiUnlock />}
                      onClick={() => setIsPasswordShown(!isPasswordShown)}
                    >
                      {isPasswordShown ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>

                {/* <Text fontSize="xs" color="gray.500" mt={1}>
                  {passwordStrength?.feedback?.suggestion}
                </Text>
                <Text fontSize="xs" color="red.500" mt={1}>
                  {passwordStrength?.warning}
                </Text> */}
              </FormControl>

              <Button
                isLoading={loading}
                alignSelf="start"
                type="submit"
                size="sm"
                colorScheme="blue"
                rightIcon={<FiArrowRight />}
                // disabled={!passwordStrength?.allow}
              >
                Sign up
              </Button>
            </Stack>
            <Stack flexDirection="row">
              <Text
                fontSize="xs"
                as="a"
                fontWeight="medium"
                cursor="pointer"
                maxWidth="fit-content"
                paddingRight="10px"
              >
                Already a user?{' '}
              </Text>
              <Link href="/signin">
                <Text
                  fontSize="xs"
                  color="blue.600"
                  display="inline-block"
                  fontWeight="bold"
                  mt="0 !important"
                >
                  Sign in
                </Text>
              </Link>
            </Stack>

            <Stack flexDirection="row">
              <Text
                fontSize="xs"
                as="a"
                fontWeight="medium"
                cursor="pointer"
                maxWidth="fit-content"
                paddingRight="10px"
              >
                Have trouble signing up?.{' '}
              </Text>
              <Text
                color="blue.600"
                fontSize="xs"
                display="inline-block"
                fontWeight="bold"
                href="/contact-us"
                as="a"
                mt="0 !important"
              >
                Contact us
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Stack>
  )
}

export default Login
