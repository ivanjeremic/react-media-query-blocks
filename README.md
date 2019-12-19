# react-media-query-blocks

>

[![NPM](https://img.shields.io/npm/v/react-media-query-blocks.svg)](https://www.npmjs.com/package/react-media-query-blocks) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install **_-INFO-_** **_Not ready for use until 22.12.2019_**

```bash
npm install react-media-query-blocks
or
yarn add react-media-query-blocks
```

![](https://i.gyazo.com/73595f8a2b31ccb5fe5eb1079e5e1ae8.gif)

## Usage

```jsx
import React from 'react'
import {
  PhoneOnly,
  TabletPortaitOnly,
  TabletLandscapeOnly,
  DesktopOnly
} from "react-media-query-blocks";

function App() {
    return (
      <div className="App">
        <PhoneOnly>
          <OnlyVisibleOnPhone />
        <PhoneOnly/>

        <TabletPortaitOnly>
          <OnlyVisibleOnTablet />
        <TabletPortaitOnly/>

        <DesktopOnly>
          <OnlyVisibleOnDesktop />
        <DesktopOnly/>
      </div>
    )
}
```

## API

If no custom values are specified the default values will be used, (recommended) because I think the default settings are working very well & in most cases. If you need a custom size range where your components need to be visible feel free to use the props available to customize your component.

| Possible Imports  | Custom size Props | How to use                      | A   | A   |
| ----------------- | ----------------- | ------------------------------- | --- | --- |
| PhoneOnly         | VisibleUpTo       | `<PhoneOnly VisibleUpTo={900}>` | D   | D   |
| TabletPortaitOnly | D                 | D                               | D   | D   |
| DesktopOnly       | D                 | D                               | D   | D   |

## License

MIT © [ivanjeremic](https://github.com/ivanjeremic)
