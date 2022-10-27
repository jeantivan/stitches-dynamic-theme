import { styled } from "../stitches.config";

const Heading = styled("h1", {
  fontSize: 48,
  fontWeight: 700,
  marginBottom: 50,
});

const Strong = styled("strong", {});

const Title = () => {
  return (
    <Heading>
      Dynamic Theme with <Strong css={{ color: "$primary" }}>Stitches</Strong>
    </Heading>
  );
};

export default Title;
