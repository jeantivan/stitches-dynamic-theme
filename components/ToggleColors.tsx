import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { styled } from "../stitches.config";
import { COLORS } from "../constants";
import { usePrimaryColor } from "./PrimaryColor";
import { TColors } from "../types";

const Container = styled("div", {
  marginLeft: "auto",
  marginRight: "auto",
  width: "70%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const ToggleGroup = styled(ToggleGroupPrimitive.Root, {
  display: "flex",
  marginBottom: 24,
});

const ToggleGroupItem = styled(ToggleGroupPrimitive.Item, {
  all: "unset",
  width: 48,
  height: 48,
  borderRadius: 4,
  border: "1px solid $slate8",
  boxShadow: `0 2px 10px $slate12`,
  backgroundColor: "$slate1",
  marginRight: 20,
  marginLeft: 20,
  transition: "all 150ms ease-in",

  "&[data-state=on]": {
    transform: "scale(1.1) rotate(30deg)",
    boxShadow: "0px 0px 4px 2px $colors$primary",
  },
});

const Text = styled("p", {
  fontSize: 24,
  marginBottom: 40,
});

const ToggleColors = () => {
  const { primaryColor, changePrimaryColor } = usePrimaryColor()!;

  const onValueChange = (color: TColors) => {
    changePrimaryColor(color);
  };

  return (
    <Container>
      <Text>Change primary color:</Text>
      <ToggleGroup
        type="single"
        value={primaryColor}
        aria-label="Primary color"
        onValueChange={onValueChange}
      >
        {COLORS.map((color) => (
          <ToggleGroupItem
            key={color}
            value={color}
            css={{ backgroundColor: `$${color}9` }}
          />
        ))}
      </ToggleGroup>
    </Container>
  );
};

export default ToggleColors;
