import React from "react";
import styled from "styled-components";

export default function PhoneOnly({ children, visibleTo }) {
  const [state] = React.useState(visibleTo);
  /*
  'min-width' need to have in the code +1 to have on the screen the correct result,
  and 'max-width' -1. In the case of PhoneOnly we have in the code default 600px
  to show content up to 599px, in the official docs, we also say default is 599px
  because what happens in the code doesn't matter to the user of the library,
  the expected result in the Browser is important.
  */
  const PhoneOnly = styled.div`
    @media (min-width: ${state ? state + 1 : 600}px) {
      display: none;
    }
  `;

  return <PhoneOnly>{children}</PhoneOnly>;
}
