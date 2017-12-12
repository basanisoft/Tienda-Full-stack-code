import {
  GraphQLID,
  GraphQLString,
  GraphQLObjectType,
  GraphQLNonNull
} from 'graphql';

import models from '../../../models/index.js';
import Material from '../../types/material.js';

export default {
    type: Material,
	        args: {
				  id: {type: new GraphQLNonNull(GraphQLID)}
	        },
	        resolve(root,args) {
			        return models.material.destroy({where: { id: args.id }});
    		}
};
