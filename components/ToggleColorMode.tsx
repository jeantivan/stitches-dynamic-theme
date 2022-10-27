import { styled } from "../stitches.config";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { useColorMode } from "./ColorMode";
import { TColorMode } from "../types";

const Text = styled("p", {
  fontSize: 24,
  marginBottom: 40,
});

const Container = styled("div", {
  marginLeft: "auto",
  marginRight: "auto",
  width: "70%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const RadioGroup = styled(RadioGroupPrimitive.Root, {
  display: "flex",
  width: "50%",
});

const Item = styled(RadioGroupPrimitive.Item, {
  all: "unset",
  padding: 12,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 20,
  fontWeight: 500,
  width: "50%",
  background: "$slate4",
  border: "1px solid $gray7",
  color: "$text",
  backgroundColor: "$gray3",

  "&:first-child": {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  "&:last-child": {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },

  "&:hover": {
    backgroundColor: "$gray4",
    color: "$primary",
    borderColor: "$primary",
  },

  "&[data-state=checked]": {
    backgroundColor: "$gray5",
    color: "$primary",
    borderColor: "$primary",
  },
});

const ToggleColorMode = () => {
  const { colorMode, changeColorMode } = useColorMode()!;

  const onValueChange = (mode: TColorMode) => {
    changeColorMode(mode);
  };

  return (
    <Container>
      <Text>Switch color mode:</Text>
      <RadioGroup value={colorMode} onValueChange={onValueChange}>
        <Item value="dark">Dark</Item>
        <Item value="light">Light</Item>
      </RadioGroup>
    </Container>
  );
};

export default ToggleColorMode;
