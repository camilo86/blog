import {
  HStack,
  Heading,
  Spacer,
  IconButton,
  useColorMode,
} from '@chakra-ui/react'
import { MoonIcon } from '@chakra-ui/icons'

export default function Navbar() {
  const { colorMode, setColorMode } = useColorMode()

  const handleChangeColorMode = () => {
    setColorMode(colorMode === 'dark' ? 'light' : 'dark')
  }

  return (
    <HStack py="4">
      <Heading as="h1" size="lg">
        🚀 Camilo Gonzalez
      </Heading>
      <Spacer />
      <IconButton
        aria-label="Color mode"
        variant="ghost"
        icon={<MoonIcon />}
        onClick={handleChangeColorMode}
      />
    </HStack>
  )
}
