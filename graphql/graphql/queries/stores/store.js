import {
  GraphQLID,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';

import models from '../../../models/index.js';
import Store from '../../types/store.js';

export default {
    type: Store,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, args) {
        return model.store.findById(args.id);
    }
};
