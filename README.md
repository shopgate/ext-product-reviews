![](https://travis-ci.org/shopgate/pwa-common.svg?branch=master)
[![GitHub release](https://img.shields.io/github/release/shopgate/pwa-common.svg)]()
[![Coverage Status](https://coveralls.io/repos/github/shopgate/pwa-common/badge.svg?branch=master)](https://coveralls.io/github/shopgate/pwa-common?branch=master)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

# Shopgate's PWA common library

This is Shopgate's **PWA common** library. It handles the basic application environment for a [PWA](https://developers.google.com/web/progressive-web-apps/).

It holds everything that is needed for data storage via [Redux](http://redux.js.org),
observable streams via [RxJS](https://github.com/ReactiveX/rxjs), and it serves with a variety of
pre-defined Redux actions, reselect selectors and RxJS streams and subscriptions.

It also provides you a variety of ready to go React Components that you can use inside your
Shopgate Cloud PWA theme.

## Installation

```
npm i @shopgate/pwa-common --save
```

## What is inside?

### Redux

  * [Action Creators](./action-creators)
  * [Actions](./actions)
  * [Reducers](./reducers)

### Reselect

  * [Selectors](./selectors)

### React

  * [Components](./components)

### RxJS

  * [Streams](./streams)
  * [Subscriptions](./subscriptions)

### Miscellaneous

  * [CSS Reset](./styles)
  * [Helper Functions](./helpers)
