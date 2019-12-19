import React, { Component } from "react";
import {
  PhoneOnly,
  TabletPortaitOnly,
  TabletLandscapeOnly,
  DesktopOnly
} from "react-media-query-blocks";

export default class App extends Component {
  render() {
    return (
      <div>
        <PhoneOnly>
          <h1 style={{ fontSize: "4em" }}>PhoneOnly !</h1>
        </PhoneOnly>
        <TabletPortaitOnly>
          <h1 style={{ fontSize: "4em" }}>TabletPortaitOnly !</h1>
        </TabletPortaitOnly>
        <TabletLandscapeOnly>
          <h1 style={{ fontSize: "4em" }}>TabletLandscapeOnly !</h1>
        </TabletLandscapeOnly>
        <DesktopOnly>
          <h1 style={{ fontSize: "4em" }}>DesktopOnly !</h1>
        </DesktopOnly>
      </div>
    );
  }
}
