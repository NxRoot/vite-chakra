import { Box, VStack, Icon, Tooltip, useColorModeValue, IconButton } from '@chakra-ui/react'
import { FiHome, FiTrendingUp, FiCompass, FiSettings } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const NavItem = ({ icon, children, path }) => {
  const bgColor = useColorModeValue('gray.100', 'gray.700')

  return (
    <Tooltip label={children} placement="right" hasArrow>
      <Link to={path}>
        <IconButton
          w="3rem"
          h="3rem"
          variant="ghost"
          borderRadius="full"
          _hover={{ bg: bgColor }}
          cursor="pointer"
          transition="all 0.2s"
        >
          <Icon as={icon} fontSize="xl" />
        </IconButton>
      </Link>
    </Tooltip>
  )
}

const Sidebar = () => {
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Box
      as="nav"
      h="full"
      w={{ base: '70px' }}
      borderRight="1px"
      borderRightColor={borderColor}
      py={3}
      left={0}
    >
      <VStack>
        <NavItem icon={FiHome} path="/">Home</NavItem>
        <NavItem icon={FiTrendingUp} path="/trending">Trending</NavItem>
        <NavItem icon={FiCompass} path="/explore">Explore</NavItem>
        <NavItem icon={FiSettings} path="/settings">Settings</NavItem>
      </VStack>
    </Box>
  )
}

export default Sidebar
