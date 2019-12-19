import React from "react";
import styled from "styled-components";

export default function PhoneOnly({ children, isVisibleTo }) {
  const [state] = React.useState(isVisibleTo);

  const PhoneOnly = styled.div`
    @media (min-width: ${state ? state : 599}px) {
      display: none;
    }
  `;

  return <PhoneOnly>{children}</PhoneOnly>;
}
