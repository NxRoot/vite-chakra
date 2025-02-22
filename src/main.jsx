import { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client'
import './style.css'
import theme from './theme.jsx'
import { ChakraProvider, ColorModeScript, HStack, Stack, Center, Spinner } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';

const Home = lazy(() => import('./pages/Home'));
const Sidebar = lazy(() => import('./components/Sidebar'));

const Wrapper = () => {
  return (
    <Stack flex="1" h="full" spacing={0}>
      <Navbar/>
      <HStack flex="1" h="full" overflowX="hidden" spacing={0}>
        <Sidebar/>
        <Stack flex="1" h="full" overflowY="auto" overflowX="hidden">
          <Suspense fallback={<Center h="full"><Spinner /></Center>}>
            <Routes>
              <Route exact path='/' Component={Home} />
              <Route path='*' Component={Home} />
            </Routes>
          </Suspense>
        </Stack>
      </HStack>
    </Stack>
  )
}

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Wrapper />
    </ChakraProvider>
  </BrowserRouter>
)
