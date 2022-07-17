import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
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
import { signIn } from '../validations'

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
  const [loading, setLoading] = useState(false)

  const formik = useFormik({
    validationSchema: signIn,
    initialValues: {
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

  return (
    <Stack w="100vw" h="100vh" align="center" justify="center">
      <Head>
        <title>Sign in to Goa natural</title>
      </Head>

      <Container py={2}>
        <Stack
          height="100%"
          p={8}
          width="100%"
          bg="white"
          borderRadius={8}
          borderColor="gray.200"
          borderWidth={1}
          spacing={4}
          boxShadow="md"
        >
          <Text fontSize="xl" fontWeight="bold">
            Sign in
          </Text>
          <Text fontSize="sm" fontWeight="normal" color="gray.400" mt={2}>
            Continue to the Goa natural platform
          </Text>

          <Stack>
            <FormControl
              isRequired
              width="100%"
              isInvalid={formik.errors.email && formik.touched.email}
            >
              <FormLabel htmlFor="email" fontSize="xs" fontWeight="semibold">
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
              <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl
              isRequired
              width="100%"
              isInvalid={formik.errors.password && formik.touched.password}
            >
              <Stack direction="row" justify="space-between" align="center">
                <FormLabel
                  htmlFor="password"
                  fontSize="xs"
                  fontWeight="semibold"
                >
                  Password
                </FormLabel>

                <Link href="/auth/forgot">
                  <Text
                    pt={2}
                    fontSize="xs"
                    as="a"
                    verticalAlign="middle"
                    display="block"
                    cursor="pointer"
                    color="blue.600"
                    fontWeight="bold"
                  >
                    Forgot password?
                  </Text>
                </Link>
              </Stack>
              <InputGroup
                size="sm"
                //@ts-ignore
                placeholder="Enter your password"
              >
                <Input
                  type={isPasswordShown ? 'text' : 'password'}
                  id="password"
                  size="sm"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  fontSize="xs"
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
                    rightIcon={isPasswordShown ? <FiLock /> : <FiUnlock />}
                    onClick={() => setIsPasswordShown(!isPasswordShown)}
                  >
                    {isPasswordShown ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
            </FormControl>

            <Button
              isLoading={loading}
              type="submit"
              size="sm"
              alignSelf="start"
              colorScheme="blue"
              onClick={() => {
                formik.handleSubmit()
              }}
              rightIcon={<FiArrowRight />}
            >
              Sign in
            </Button>
          </Stack>

          <Link href="/signup">
            <Text
              fontSize="xs"
              as="a"
              display="block"
              fontWeight="medium"
              cursor="pointer"
            >
              Don&#39;t have an account?
              <Text display="inline-block" color="blue.600" fontWeight="bold">
                Get Started
              </Text>
            </Text>
          </Link>
        </Stack>
      </Container>
    </Stack>
  )
}

export default Login
