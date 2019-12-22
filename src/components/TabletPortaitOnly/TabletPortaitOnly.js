import React from "react";
import styled from "styled-components";

export default function TabletPortaitOnly({
  children,
  isVisibleTo,
  isVisibleFrom
}) {
  const [isVisibleToState] = React.useState(isVisibleTo);
  const [isVisibleFromState] = React.useState(isVisibleFrom);

  const TabletPortaitOnly = styled.div`
    @media (min-width: ${isVisibleToState ? isVisibleToState + 1 : 900}px) {
      display: none;
    }
    @media (max-width: ${isVisibleFromState ? isVisibleFromState - 1 : 599}px) {
      display: none;
    }
  `;

  return <TabletPortaitOnly>{children}</TabletPortaitOnly>;
}
