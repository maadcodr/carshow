/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.scss';

function Home({ categories }) {
  return (
    <div>
      <h1 className={s.title}>Categories</h1>
      <ul className={s.categories}>
        {categories.map((item, index) => (
          <li key={index} className={s.category}>
            <a href="" className={s.categoryTitle}>{item.title}</a>
              <span
                className={s.categoryDesc}
                dangerouslySetInnerHTML={{ __html: item.contentSnippet }}
              />
          </li>
        ))}
      </ul>
    </div>
  );
}

Home.propTypes = {
  category: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    contentSnippet: PropTypes.string
  })).isRequired
};

export default withStyles(Home, s);
