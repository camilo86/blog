import { Container, HStack, Text } from '@chakra-ui/react'

export default function Footer() {
  return (
    <Container>
      <HStack>
        <Text
          fontSize="sm"
          _light={{ color: 'blackAlpha.500' }}
          _dark={{ color: 'whiteAlpha.500' }}
        >
          &#169; 2022 Camilo Gonzalez. All Rights Reserved.
        </Text>
      </HStack>
    </Container>
  )
}
