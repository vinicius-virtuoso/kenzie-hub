import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";

import { ContainerContent } from "../ContainerContent";
import { Logo } from "../Logos";
import { MdOutlineExitToApp } from "react-icons/md";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout_user_thunk } from "../../store/modules/user/thunks";

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { user } = useSelector((state) => state);

  const logout = () => {
    window.localStorage.clear();
    dispatch(logout_user_thunk());
    history.push("/");
  };

  return (
    <Flex as="header" w="100%" h="auto" flexDirection="column" shadow="dark-lg">
      <Box shadow="md" bg="blackAlpha.300" px={[0, 0, 0, 4]}>
        <ContainerContent alignItems="center" justifyContent="space-between">
          <Logo fontSize={["2rem", "2rem", "2rem", "3rem"]} />
          <Flex alignItems="center" gap={[2, 4]} py={[4, 4, 4, 8]}>
            <ButtonGroup isAttached variant="outline">
              <Button
                onClick={logout}
                d="flex"
                fontWeight="normal"
                alignItems="center"
                justifyContent="space-between"
                gap="20xp"
                w={20}
                background="blackAlpha.900"
                _hover={{ color: "dark", backgroundColor: "white" }}
              >
                Sair
                <MdOutlineExitToApp />
              </Button>
            </ButtonGroup>
          </Flex>
        </ContainerContent>
      </Box>

      <Box py={4} px={[0, 0, 0, 4]}>
        <ContainerContent alignItems="center" justifyContent="space-between">
          <Flex
            py={2}
            justifyContent="space-between"
            w="100%"
            alignItems="center"
          >
            <Heading
              fontSize={[".75rem", "1rem"]}
              fontWeight="normal"
              color="white"
              letterSpacing={1}
            >
              Olá,{" "}
              <Box as="span" fontWeight="bold" color="purple.500">
                {user.user.name.split(" ")[0]}
              </Box>
            </Heading>

            <Text fontSize={[".75rem", "1rem"]}>{user.user.course_module}</Text>
          </Flex>
        </ContainerContent>
      </Box>
    </Flex>
  );
};

export default Header;
