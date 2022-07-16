import React from 'react'
import FloatingWhatsApp from 'react-floating-whatsapp'
import { Stack } from '@chakra-ui/react'

const FloatingWhatsapp = () => {
  return (
    <Stack>
      <FloatingWhatsApp
        phoneNumber="9822168979"
        accountName="Goa natural"
        allowClickAway
        avatar="/Goa-natural/logo.png"
        notification
        notificationDelay={60000} // 1 minute
      />
    </Stack>
  )
}

export default FloatingWhatsapp
