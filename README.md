# Vue Portals

Assists in creating pages that can embed and be embedded as portal elements.

Google is introducing a new `<portal>` element which enables unique navigation and interaction between distinct webpages. You can check out the proposal at [WICG/portals](https://github.com/wicg/portals).

## Installation

To get started, simply install the package into your project.

```
# Yarn
yarn add vue-portals

# NPM
npm install vue-portals
```

## Usage

> ___No.__ Currently, only Chrome Canary supports Portals, and you need to turn on a feature flag first. This should not be used in production, because none of your users will even see it._

### Portal Window

The `PortalWindow` element is what you'll use for embedding portals onto a page. These can be placed anywhere you like and will fallback to a `div` if the user's browser doesn't support portals.

```
import { PortalWindow } from 'vue-portals'
```

```
<PortalWindow src="https://www.google.com"/>
```

You can provide fallback content inside of the `PortalWindow` element that will be displayed in case your user can't use portals. This is just an example, ideally you should make the fallback content as functionally similar to the embed as possible.

```
<PortalWindow src="https://www.google.com">
  <p>Your browser doesn't support portals :(</p>
</PortalWindow>
```

In order to activate a portal so that it goes from being embedded to being the main page, you simply need to call the `activate` function on the `PortalWindow` element.

```
<PortalWindow src="https://www.google.com" ref="portal">
```

```
methods: {
  open: function () {
    this.$refs.portal.activate()
  }
}
```

### Portal Page

The `PortalPage` element is what you'll use for making pages that can be embedded. Technically any page can be embedded, but without proper design and event handling they aren't much use. The `PortalPage` element provides three slots that you can use to customize what the page looks like in the three different states that an embedded page can be in.

```
import { PortalPage } from 'vue-portals
```

```
<template>
  <PortalPage>
    <template v-slot:default>
      <p>This will be displayed when visiting the page directly.</p>
    </template>

    <template v-slot:open>
      <p>This will be displayed after being activated from a portal.</p>
    </template>

    <template v-slot:embed>
      <p>This will be displayed while in a portal and not activated.</p>
    </template>
  </PortalPage>
</template>
```

## Development

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```
