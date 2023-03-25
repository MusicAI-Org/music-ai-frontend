import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 1rem;
`;

// content div
export const RecentlyPlayedAndMostPopularDiv = styled.div`
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "70vh",
  width: "100%",
`;

export const NowInLiveAndDotContainer = styled.div`
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  width: "100%",
`;

// panel div

export const HelperFlex = styled.div``;
export const PlaylistsContainer = styled.div`
  display: flex,
  flexDirection: column,
  alignItems: flex-start,
  justifyContent: flex-start,
  height: 30vh,
  borderRadius: 10px,
  overflow: hidden,
`;
export const FriendsActivityContainer = styled.div`
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  width: "100%",
  height: "50vh",
  position: "relative",
  borderRadius: "10px",
  overflow: "hidden",,
`;
export const ScrollContainer = styled.div`
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  width: "100%",
  height: "40vh",
  overflow: "hidden",
  overflowY: "scroll",
`;
