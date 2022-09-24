import { Button } from "@chakra-ui/react";
import React from "react";

const ButtonForm = ({ loading, loadingText, isDirty, children }, ref) => {
  return (
    <Button
      mt={4}
      colorScheme="purple"
      isLoading={loading}
      loadingText={loadingText}
      type="submit"
      fontSize="1xl"
      fontWeight="medium"
      letterSpacing={1}
      color="white"
      disabled={!isDirty || loading}
    >
      {children}
    </Button>
  );
};

export default React.forwardRef(ButtonForm);
