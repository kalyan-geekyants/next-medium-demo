import {
  Modal,
  Button,
  ModalContent,
  Text,
  ButtonText,
  Heading,
  ModalHeader,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  Icon,
  CloseIcon,
  ModalFooter,
} from "@gluestack-ui/themed";

const SampleModal = ({ showModal, setShowModal }: any) => {
  return (
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        //   finalFocusRef={ref}
      >
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            <Heading size="lg">Engage with Modals</Heading>
            <ModalCloseButton>
              <Icon as={CloseIcon} />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <Text>
              Elevate user interactions with our versatile modals. Seamlessly
              integrate notifications, forms, and media displays. Make an impact
              effortlessly.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="outline"
              size="sm"
              action="secondary"
              mr="$3"
              onPress={() => {
                setShowModal(false);
              }}
            >
              <ButtonText>Cancel</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
  );
};

export default SampleModal;
