import {
  GraphQLList,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';

import models from '../../../models/index.js';
import Store from '../../types/store.js';

export default {
    type: new GraphQLList(Store),
    args: {
        author_id: {
            type: GraphQLID
        }
    },
    resolve(root, args) {
        //return models.stores.findAll({where: args, include: [ { model: models.material } ] });
        return models.store.findAll({where: args});
    }
};
