import { Box, CircularProgress } from "@chakra-ui/react";

const LoadingPage = () => {
  return (
    <Box
      w="100vw"
      h="100vh"
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}
    >
      <CircularProgress isIndeterminate />
    </Box>
  );
};

export default LoadingPage;
