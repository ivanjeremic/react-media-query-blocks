import React from "react";
import styled from "styled-components";

export default function DesktopOnly({ children, isVisibleTo, isVisibleFrom }) {
  const [isVisibleToState] = React.useState(isVisibleTo);
  const [isVisibleFromState] = React.useState(isVisibleFrom);

  const DesktopOnly = styled.div`
    @media (min-width: ${isVisibleToState ? isVisibleToState : 1800}px) {
      display: none;
    }
    @media (max-width: ${isVisibleFromState ? isVisibleFromState : 1200}px) {
      display: none;
    }
  `;

  return <DesktopOnly>{children}</DesktopOnly>;
}
