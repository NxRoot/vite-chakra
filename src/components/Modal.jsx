import { Modal as CModal, ModalHeader, ModalBody, ModalFooter, ModalContent, ModalOverlay, ModalCloseButton, HStack } from "@chakra-ui/react";

export default function Modal({ title = "Title", onClose, children, footer, ...rest }) {
  return (
    <CModal isOpen onClose={onClose} size="sm" isCentered {...rest}>
      <ModalOverlay onClick={onClose} />
      <ModalContent shadow="none">
        <ModalHeader as={HStack} w="full">
          <div style={{ flex: 1 }}>{title}</div>
          <ModalCloseButton tabIndex={-1} position="relative" right="-2" top="0" />
        </ModalHeader>
        <ModalBody shadow="none" >
          {children}
        </ModalBody>
        <ModalFooter as={HStack} p="6" spacing={3}>
          {footer}
        </ModalFooter>
      </ModalContent>
    </CModal>
  )
}