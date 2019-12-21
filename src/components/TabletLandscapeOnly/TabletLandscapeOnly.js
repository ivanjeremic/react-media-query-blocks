import React from "react";
import styled from "styled-components";

export default function TabletLandscapeOnly({
  children,
  isVisibleTo,
  isVisibleFrom
}) {
  const [isVisibleToState] = React.useState(isVisibleTo);
  const [isVisibleFromState] = React.useState(isVisibleFrom);

  const TabletLandscapeOnly = styled.div`
    @media (min-width: ${isVisibleToState ? isVisibleToState : 1199}px) {
      display: none;
    }
    @media (max-width: ${isVisibleFromState ? isVisibleFromState : 900}px) {
      display: none;
    }
  `;

  return <TabletLandscapeOnly>{children}</TabletLandscapeOnly>;
}
