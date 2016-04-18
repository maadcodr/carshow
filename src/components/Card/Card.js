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
import s from './Card.scss';

function Card({ category }) {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <div className={s.title}>{category.title}</div>
        <div className={s.description}>{category.description}</div>
      </div>
    </div>
  );
}

export default withStyles(Card, s);
