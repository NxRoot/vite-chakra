import { Box, Flex, IconButton, Text, useColorMode } from '@chakra-ui/react'
import { FiMoon, FiSun } from 'react-icons/fi'

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box 
      as="nav" 
      position="relative"
      px={4}
      py={3}
      borderBottom="1px"
      borderColor="gray.200"
      _dark={{
        borderColor: 'gray.700'
      }}
    >
      <Flex align="center" justify="space-between">
        <Text 
          fontSize="xl" 
          fontWeight="bold"
        >
          Dashboard
        </Text>
        <IconButton
          aria-label="Toggle color mode"
          icon={colorMode === 'light' ? <FiMoon /> : <FiSun />}
          onClick={toggleColorMode}
          variant="ghost"
          size="md"
          borderRadius="full"
        />
      </Flex>
    </Box>
  )
}

export default Navbar
