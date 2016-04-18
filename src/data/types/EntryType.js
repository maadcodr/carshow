/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  GraphQLObjectType as ObjectType,
  GraphQLInt as IntType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const EntryType = new ObjectType({
  name: 'Entry',
  fields: {
    cat_id: { type: new NonNull(IntType) },
    car_id: { type: new NonNull(IntType) }
  }
});

export default EntryType;
