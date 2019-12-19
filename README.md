# react-media-query-blocks

>

[![NPM](https://img.shields.io/npm/v/react-media-query-blocks.svg)](https://www.npmjs.com/package/react-media-query-blocks) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install react-media-query-blocks
or
yarn add react-media-query-blocks
```

![](https://i.gyazo.com/a6d1a65cacb25c08da73ee37abc73d26.gif)

## Usage

```jsx
import React from 'react'
import { Desktop, Mobile, Tablet } from 'react-media-query-blocks'

function App() {
    return (
      <div className="App">
        <Mobile>
          <OnlyVisibleOnMobile />
        <Mobile/>

        <Tablet>
          <OnlyVisibleOnTablet />
        <Tablet/>

        <Desktop>
          <OnlyVisibleOnDesktop />
        <Desktop/>
      </div>
    )
}
```

## API

## License

MIT © [ivanjeremic](https://github.com/ivanjeremic)
