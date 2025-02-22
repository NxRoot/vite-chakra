import { Drawer as CDrawer, DrawerHeader, DrawerBody, DrawerFooter, DrawerContent, DrawerOverlay, DrawerCloseButton, HStack } from "@chakra-ui/react";

export default function Drawer({ title = "Title", onClose, children, footer, ...rest }) {
  return (
    <CDrawer isOpen onClose={onClose} size="md" isCentered {...rest}>
      <DrawerOverlay onClick={onClose} />
      <DrawerContent shadow="none">
        <DrawerHeader as={HStack} w="full">
          <div style={{ flex: 1 }}>{title}</div>
          <DrawerCloseButton tabIndex={-1} position="relative" right="-2" top="0" />
        </DrawerHeader>
        <DrawerBody shadow="none" >
          {children}
        </DrawerBody>
        <DrawerFooter as={HStack} p="6" spacing={3}>
          {footer}
        </DrawerFooter>
      </DrawerContent>
    </CDrawer>
  )
}