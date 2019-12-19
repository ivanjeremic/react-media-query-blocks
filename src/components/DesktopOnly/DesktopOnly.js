import React from "react";
import styled from "styled-components";

export default function DesktopOnly({ children }) {
  const [state, setState] = React.useState("");

  const DesktopOnly = styled.div`
    @media (min-width: 1799px) {
      display: none;
    }
    @media (max-width: 1200px) {
      display: none;
    }
  `;

  return <DesktopOnly>{children}</DesktopOnly>;
}
