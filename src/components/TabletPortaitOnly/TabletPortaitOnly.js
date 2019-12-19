import React from "react";
import styled from "styled-components";

export default function TabletPortaitOnly({ children }) {
  const [state, setState] = React.useState("");

  const TabletPortaitOnly = styled.div`
    @media (min-width: 899px) {
      display: none;
    }
    @media (max-width: 599px) {
      display: none;
    }
  `;

  return <TabletPortaitOnly>{children}</TabletPortaitOnly>;
}
