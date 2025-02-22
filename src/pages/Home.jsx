import { Box, Container, Heading, Text, SimpleGrid, Icon, VStack, useColorModeValue } from '@chakra-ui/react';
import { FiUsers, FiSearch, FiPlusCircle, FiDatabase } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

function FeatureCard({ icon, title, description, onClick }) {
  const bg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box
      p={6}
      bg={bg}
      border="1px"
      borderColor={borderColor}
      rounded="lg"
      transition="all 0.3s"
      _hover={{
        transform: 'translateY(-5px)',
        shadow: 'lg',
        cursor: 'pointer'
      }}
      onClick={onClick}
    >
      <Icon as={icon} w={10} h={10} mb={4} color="purple.500" />
      <Heading size="md" mb={2}>{title}</Heading>
      <Text color="gray.600">{description}</Text>
    </Box>
  );
}

function Home() {
  const navigate = useNavigate();
  const bgGradient = useColorModeValue(
    'linear(to-b, purple.50, white)',
    'linear(to-b, gray.900, gray.800)'
  );

  const features = [
    {
      icon: FiUsers,
      title: 'View Users',
      description: 'Browse and manage all registered users in the system',
      onClick: () => navigate('/users')
    },
    {
      icon: FiSearch,
      title: 'Search Users',
      description: 'Find specific users using advanced search filters',
      onClick: () => navigate('/users/search')
    },
    {
      icon: FiPlusCircle,
      title: 'Create User',
      description: 'Add a new user to the system with detailed information',
      onClick: () => navigate('/users/create')
    },
    {
      icon: FiDatabase,
      title: 'User Details',
      description: 'View and edit detailed user information',
      onClick: () => navigate('/users/details')
    }
  ];

  return (
    <Box
      flex={1}
      bgGradient={bgGradient}
      py={20}
    >
      <Container maxW="container.xl">
        <VStack spacing={8} mb={16} textAlign="center">
          <Heading
            size="2xl"
            bgGradient="linear(to-r, purple.400, pink.400)"
            bgClip="text"
          >
            Welcome to Dashboard
          </Heading>
          <Text fontSize="xl" color="gray.500" maxW="2xl">
            Efficiently manage your data with our modern and intuitive interface.
            Select an option below to get started.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default Home;