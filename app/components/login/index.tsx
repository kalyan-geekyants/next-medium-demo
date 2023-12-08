import React, { useState } from "react";
import {
  ButtonText,
  CloseIcon,
  FormControlError,
  FormControlErrorText,
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
import { FormControl } from "@gluestack-ui/themed";
interface Props {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
}

const LoginModal = ({ showModal, setShowModal }: Props) => {
  const [userName, setUserName] = useState("");
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
          <FormControl>
            <Input
              variant="outline"
              size="lg"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
              isRequired={true}
              mt={30}
              borderRadius={"$full"}
            >
              <InputField
                placeholder="User name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </Input>
            <FormControlError>
              <FormControlErrorText>
                At least 6 characters are required.
              </FormControlErrorText>
            </FormControlError>
            <Button
              sx={{ color: "#fff" }}
              variant="solid"
              bgColor="#000"
              action="secondary"
              mt={10}
              size="lg"
              type="submit"
              borderRadius={"$full"}
              disabled={userName.length < 4}
              onPress={() => console.log(userName)}
            >
              <ButtonText>Login</ButtonText>
            </Button>
          </FormControl>
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
