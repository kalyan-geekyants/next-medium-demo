import Image from "next/image";
import {
  Avatar,
  Box,
  Button,
  Input,
  InputSlot,
  InputIcon,
  SearchIcon,
  InputField,
  AvatarFallbackText,
  EditIcon,
  BellIcon,
} from "@gluestack-ui/themed";
import { ReactNode, useState } from "react";
import LoginModal from "../login";
import Compose from "../compose/Compose";

const Navigation = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showComposeModal,setShowComposeModal] = useState(false);
  return (
    <Box
      //   style={{
      //     padding: "0px 24px",
      //     height: "57px",
      //     display: "flex",
      //     alignItems: "center",
      //     borderBottom: "solid 1px #F2F2F2",
      //   }}
      height={57}
      borderBottomWidth={1}
      borderBottomColor="#F2F2F2"
      pl={24}
      pr={24}
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <CustomBox>
        <Image
          alt="logo"
          src="/assets/medium_icon.png"
          width={40}
          height={40}
        />
        <Input
          borderRadius={"$full"}
          size="sm"
          ml={20}
          bgColor="#F9F9F9"
          borderWidth={0}
        >
          <InputSlot pl="$3">
            <InputIcon as={SearchIcon} size="lg" />
          </InputSlot>
          <InputField placeholder="Search" />
        </Input>
      </CustomBox>
      <CustomBox>
        <div onClick={() => setShowComposeModal(true)}>
          <CustomBox>
            <InputIcon as={EditIcon} size="lg" color="#6B6B6B" />{" "}
            <p style={{ fontSize: "14px", color: "#6B6B6B", marginLeft: 8 }}>
              Write
            </p>
          </CustomBox>
        </div>
        <InputIcon as={BellIcon} size="lg" color="#6B6B6B" ml={30} />{" "}
        <Avatar bgColor="#00579B" size="sm" borderRadius="$full" ml={30}>
          <AvatarFallbackText sx={{ _light: { color: "#fff" } }}>
            Kalyan
          </AvatarFallbackText>
        </Avatar>
        <Button
          sx={{ bgColor: "#000000", color: "#FFFFFF" }}
          size="md"
          borderRadius={"$full"}
          variant="solid"
          action="default"
          onPress={() => setShowLoginModal(true)}
          ml={30}
        >
          Get started
        </Button>
      </CustomBox>
      <LoginModal showModal={showLoginModal} setShowModal={setShowLoginModal} />
      <Compose showModal={showComposeModal} setShowModal={setShowComposeModal} />
    </Box>
  );
};

export const CustomBox = ({ children }: { children: ReactNode }) => (
  <Box display="flex" flexDirection="row" alignItems="center">
    {children}
  </Box>
);

export default Navigation;
