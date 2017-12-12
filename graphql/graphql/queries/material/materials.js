import {
  GraphQLList,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';

import models from '../../../models/index.js';
import Material from '../../types/material.js';

export default {
    type: new GraphQLList(Material),
    args: {

    },
    resolve(root, args) {
        return models.material.findAll({where: args});
    }
};
