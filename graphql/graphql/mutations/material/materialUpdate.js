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
				  id:{type: new GraphQLNonNull(GraphQLID)},
				  name: {type: new GraphQLNonNull(GraphQLString)},
		          description:{ type: new GraphQLNonNull(GraphQLString)}
	        },
	        resolve(root,args) {
			        return models.material.update({
					            name: args.name,
								description: args.description
							},{where:{id:args.id}});
    		}
};
