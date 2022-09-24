import { Box, FormControl, FormLabel, Select } from "@chakra-ui/react";
import React from "react";

const SelectsControl = ({ label, options, defaultValue, ...props }, ref) => {
  return (
    <FormControl ref={ref}>
      <FormLabel>{label}</FormLabel>
      <Select
        defaultValue={defaultValue ? defaultValue : options[0].value}
        {...props}
      >
        {options.map((op, index) => (
          <Box
            as="option"
            key={index}
            value={op.value}
            style={{ color: "white", backgroundColor: "#111111" }}
          >
            {op.value}
          </Box>
        ))}
      </Select>
    </FormControl>
  );
};

export default React.forwardRef(SelectsControl);
