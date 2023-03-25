import styled from "@emotion/styled";

export const TextContainer = styled.div<{ fS: string; width: string }>`
  fontWeight: "bold",
  color: "white",
  textAlign: "left",
  "margin-left": "0.3rem",
  width: "100%",
  fontSize: ${(props) => props.fS};
  width: ${(props) => props.width};

`;
