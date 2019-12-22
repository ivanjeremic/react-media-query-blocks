import React from "react";
import styled from "styled-components";

export default function TabletLandscapeOnly({
  children,
  isVisibleTo,
  isVisibleFrom
}) {
  const [isVisibleToState] = React.useState(isVisibleTo);
  const [isVisibleFromState] = React.useState(isVisibleFrom);
  /*
  'min-width' need to have in the code +1 to have on the screen the correct result,
  and 'max-width' -1. In the case of PhoneOnly we have in the code default 600px
  to show content up to 599px, in the official docs, we also say default is 599px
  because what happens in the code doesn't matter to the user of the library,
  the expected result in the Browser is important.
  */
  const TabletLandscapeOnly = styled.div`
    @media (min-width: ${isVisibleToState ? isVisibleToState + 1 : 1200}px) {
      display: none;
    }
    @media (max-width: ${isVisibleFromState ? isVisibleFromState - 1 : 899}px) {
      display: none;
    }
  `;

  return <TabletLandscapeOnly>{children}</TabletLandscapeOnly>;
}
