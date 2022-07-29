import React from 'react'
import { Stack } from '@chakra-ui/react'

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

export default Card
