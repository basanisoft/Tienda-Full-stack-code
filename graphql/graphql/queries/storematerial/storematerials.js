import {
  GraphQLList,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';

import models from '../../../models/index.js';
import Storematerial from '../../types/storematerial.js';

export default {
    type: new GraphQLList(Storematerial),
    args: {
        author_id: {
            type: GraphQLID
        }
    },
    resolve(root, args) {
        //return models.stores.findAll({where: args, include: [ { model: models.material } ] });
        return models.storematerial.findAll({where: args});
    }
};
