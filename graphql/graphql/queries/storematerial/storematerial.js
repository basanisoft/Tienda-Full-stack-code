import {
  GraphQLID,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';

import models from '../../../models/index.js';
import Storematerial from '../../types/storematerial.js';

export default {
    type: Storematerial,
    args: {
        author_id: {
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, args) {
        return model.storematerial.findById(args.id);
    }
};
