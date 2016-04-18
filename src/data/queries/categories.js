/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { GraphQLList as List } from 'graphql';
import CategoryType from '../types/CategoryType';
import Promise from 'bluebird';
import mongoose from 'mongoose';

mongoose.connect('mongodb://erik:delorean@localhost/carshow16');

var CATEGORY = mongoose.model('Category', {
  id: mongoose.Schema.Types.ObjectId,
  cat_id: Number,
  title: String,
  description: String
});

let items = [];

const categories = {
  type: new List(CategoryType),
  resolve() {
    if(items.length !== 0) {
      return items;
    }
    return new Promise((resolve, reject) => {
      CATEGORY.find((err, categories) => {
        if (err) {
          items.length = 0;
          reject(err);
        } else {
          items = categories;
          resolve(categories);
        }
      })
    })
  }
};

export default categories;
