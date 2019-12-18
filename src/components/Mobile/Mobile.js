import React from "react";

export default function Mobile({ children, mysize }) {
  const [checkMin, setCheckMin] = React.useState(false);

  React.useEffect(() => {
    function CheckWin() {
      let Minquery = window.matchMedia(`(min-width: ${mysize}px)`);
      if (Minquery.matches) {
        setCheckMin(Minquery.matches);
      } else {
        setCheckMin(false);
      }
    }
    window.onresize = CheckWin;
    window.onload = CheckWin;
  }, [checkMin]);

  return (
    <div style={{ display: checkMin ? "none" : "unset" }}>
      <p>dws</p>
      {children}
    </div>
  );
}
