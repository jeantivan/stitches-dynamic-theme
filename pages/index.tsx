import { useState, useMemo } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { styled, createTheme } from "../stitches.config";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";

const Content = styled("div", {
  width: "100%",
  height: "100vh",
  display: "grid",
  placeItems: "center",
});

const Title = styled("h1", {
  fontSize: 48,
  fontWeight: 700,
  marginBottom: 50,
});

const Text = styled("p", {
  fontSize: 24,
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

const Strong = styled("strong", {});

const colors = ["orange", "amber", "mint", "grass", "blue", "tomato"] as const;

type Colors = typeof colors[number];

const Home: NextPage = () => {
  const [primaryColor, setPrimaryColor] = useState<Colors>("orange");

  const theme = useMemo(
    () => createTheme({ colors: { primary: `$${primaryColor}9` } }),
    [primaryColor]
  );

  const onValueChange = (value: Colors) => {
    setPrimaryColor(value);
  };
  return (
    <div className={theme}>
      <Content>
        <Head>
          <title>Stitches Dynamic Theme</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Title>
          Dynamic Theme with{" "}
          <Strong css={{ color: "$primary" }}>Stitches</Strong>
        </Title>
        <ToggleGroup
          type="single"
          value={primaryColor}
          aria-label="Primary color"
          onValueChange={onValueChange}
        >
          {colors.map((color) => (
            <ToggleGroupItem
              key={color}
              value={color}
              css={{ backgroundColor: `$${color}9` }}
            />
          ))}
        </ToggleGroup>
        <Text>
          The current primary color is:{" "}
          <Strong css={{ color: `$primary` }}>{primaryColor}</Strong>
        </Text>
      </Content>
    </div>
  );
};

export default Home;
