/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.scss';

function Header() {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <div className={s.headerText}>
          <img src={require('./acsclogo.svg')} width="50" height="50" alt="AAA" />
          <span>Employee Car Show</span>
        </div>
      </div>
    </div>
  );
}

export default withStyles(Header, s);
