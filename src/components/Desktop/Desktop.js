import React from "react";
import styled from "styled-components";

export default function Desktop({ children }) {
  const [state, setState] = React.useState("");

  const StyledWrapp = styled.div`
    @media (min-width: 600px) {
      display: none;
    }
  `;

  return <StyledWrapp>{children}</StyledWrapp>;
}
