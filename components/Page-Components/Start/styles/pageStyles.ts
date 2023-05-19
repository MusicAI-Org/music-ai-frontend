import styled from "@emotion/styled";

export const StyledContainer = styled.div<{ color: string }>`
  height: fit-content;
  width: 100%;
  flexdirection: column;
  alignitems: center;
  justifycontent: flex-start;
  // padding-top: 1rem;
  backgroundcolor: ${(props) => props.color || "white"};
  overflow-y: scroll;
  position: relative;
`;
export const PlaylistAndRecentlyContainer = styled.div`
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // background-color: ${(theme) => theme.theme.red[100]},
  height: "90vh",
  width: "100%",
  // padding: ${(theme) => theme.theme.spacing05},
`;
export const PlaylistAndRecentlyPlayed = styled.div`
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  background-color: "blue",
  height: "100%",
  width: "70%",
`;

export const Random = styled.div`
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background-color: "black",
  height: "90vh",
  width: "100%",
`;
