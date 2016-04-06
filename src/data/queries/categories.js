/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { GraphQLList as List } from 'graphql';
import fetch from '../../core/fetch';
import CategoryType from '../types/CategoryType';

var mongoose = require('mongoose');
var CATEGORY = mongoose.model('Category', {
  id: mongoose.Schema.Types.ObjectId,
  cat_id: Number,
  title: String,
  description: String
});

let items = [];
let lastFetchTask;
let lastFetchTime = new Date(1970, 0, 1);

const categories = {
  type: new List(CategoryType),
  resolve() {
    if (lastFetchTask) {
      return lastFetchTask;
    }

    if ((new Date() - lastFetchTime) > 1000 * 3 /* 10 mins */) {
      lastFetchTime = new Date();
      lastFetchTask = fetch(url)
        .then(response => response.json())
        .then(data => {
          if (data.responseStatus === 200) {
            items = data.responseData.feed.entries;
          }

          return items;
        })
        .finally(() => {
          lastFetchTask = null;
        });

      if (items.length) {
        return items;
      }

      return lastFetchTask;
    }

    return items;
  }
};

export default categories;
