import React from "react";
import styled from "styled-components";

export default function TabletPortaitOnly({
  children,
  visibleTo,
  visibleFrom
}) {
  const [visibleToState] = React.useState(visibleTo);
  const [visibleFromState] = React.useState(visibleFrom);

  const TabletPortaitOnly = styled.div`
    @media (min-width: ${visibleToState ? visibleToState + 1 : 900}px) {
      display: none;
    }
    @media (max-width: ${visibleFromState ? visibleFromState - 1 : 599}px) {
      display: none;
    }
  `;

  return <TabletPortaitOnly>{children}</TabletPortaitOnly>;
}
