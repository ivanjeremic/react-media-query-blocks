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
        <PhoneOnly isVisibleTo={900}>
          <h1>PhoneOnly</h1>
        </PhoneOnly>
        <TabletPortaitOnly>
          <h1>This is TabletPortaitOnly !</h1>
        </TabletPortaitOnly>
        <TabletLandscapeOnly>
          <h1>This is TabletLandscapeOnly !</h1>
        </TabletLandscapeOnly>
        <DesktopOnly>
          <h1>This is DesktopOnly !</h1>
        </DesktopOnly>
      </div>
    );
  }
}
