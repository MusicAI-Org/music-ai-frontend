import styled from "@emotion/styled";

export const StyledContainer = styled.div<{ color: string }>`
  height: 90vh;
  width: 100%;
  flexdirection: column;
  alignitems: center;
  justifycontent: flex-start;
  backgroundcolor: ${(props) => props.color || "white"};
  overflow-y: scroll;
`;
