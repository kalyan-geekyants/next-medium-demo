import React from "react";
import {
  ButtonText,
  CloseIcon,
  Icon,
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@gluestack-ui/themed";
import { Heading } from "@gluestack-ui/themed";
import { Button } from "@gluestack-ui/themed";
import { InputField } from "@gluestack-ui/themed";
import { Input } from "@gluestack-ui/themed";
type Props = {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
};

const LoginModal = ({ showModal, setShowModal }: Props) => {
  return (
    <Modal
      isOpen={showModal}
      onClose={() => {
        setShowModal(false);
      }}
    >
      <ModalBackdrop />
      <ModalContent>
        <ModalHeader>
          <Heading size="lg"></Heading>
          <ModalCloseButton>
            <Icon as={CloseIcon} />
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody pl={30} pr={30}>
          <Heading size="lg" textAlign="center">
            Join Medium.
          </Heading>
          <Input
            variant="outline"
            size="lg"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
            mt={30}
            borderRadius={"$full"}
          >
            <InputField placeholder="User name" />
          </Input>
          <Button
            sx={{ color: "#fff" }}
            variant="solid"
            bgColor="#000"
            action="secondary"
            mt={10}
            size="lg"
            type="submit"
            borderRadius={"$full"}
          >
            <ButtonText>Login</ButtonText>
          </Button>
        </ModalBody>
        <ModalFooter>
          <Button
            mt={10}
            variant="outline"
            size="sm"
            action="secondary"
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

export default LoginModal;
