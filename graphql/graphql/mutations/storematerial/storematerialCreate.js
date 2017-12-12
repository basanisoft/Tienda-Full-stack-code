import {
  GraphQLID,
  GraphQLString,
  GraphQLObjectType,
  GraphQLNonNull
} from 'graphql';

import models from '../../../models/index.js';
import Store from '../../types/storematerial.js';

export default {
    type: Store,
	        args: {
				  material_id: {type: new GraphQLNonNull(GraphQLID)},
		          store_id:{ type: new GraphQLNonNull(GraphQLID)  },
		          quantity:{ type: new GraphQLNonNull(GraphQLString)},
		          create_date:{type: new GraphQLNonNull(GraphQLString)}
	        },
	        resolve(root,args) {
			        return models.storematerial.create({
					            material_id: args.material_id,
								store_id: args.store_id,
								quantity: args.quantity,
								create_date:args.create_date
							});
    		}
};
