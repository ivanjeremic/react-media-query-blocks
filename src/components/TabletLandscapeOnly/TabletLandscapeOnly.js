import React from "react";
import styled from "styled-components";

export default function TabletLandscapeOnly({ children }) {
  const [state, setState] = React.useState("");

  const TabletLandscapeOnly = styled.div`
    @media (min-width: 1199px) {
      display: none;
    }
    @media (max-width: 900px) {
      display: none;
    }
  `;

  return <TabletLandscapeOnly>{children}</TabletLandscapeOnly>;
}
