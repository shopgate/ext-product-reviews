/**
 * Copyright (c) 2017-present, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

const materialShadow = 'rgba(0, 0, 0, .117647) 0 1px 6px, rgba(0, 0, 0, .117647) 0 1px 4px';

export default {
  materialShadow,
  blur: {
    backdropFilter: 'blur(10px)',
  },
  gap: {
    small: 8,
    big: 16,
    bigger: 20,
    xbig: 32,
    xxbig: 64,
  },
  navigator: {
    height: 56,
    shadow: materialShadow,
  },
  filterbar: {
    height: 48,
  },
  loadingIndicator: {
    size: 32,
    strokeWidth: 3,
  },
  paymentBar: {
    height: 78,
  },
  tabBar: {
    height: 49,
  },
  statusBar: {
    height: 20,
  },
};
