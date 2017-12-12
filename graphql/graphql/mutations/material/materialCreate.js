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
				  name: {type: new GraphQLNonNull(GraphQLString)},
				  description:{ type: new GraphQLNonNull(GraphQLString)},
				  price:{type: new GraphQLNonNull(GraphQLString)},
				  Image:{type: new GraphQLNonNull(GraphQLString)}
	        },
	        resolve(root,args) {
			        return models.material.create({
					            name: args.name,
								description: args.description,
								price: args.price,
								Image: args.Image
							});
    		}
};
