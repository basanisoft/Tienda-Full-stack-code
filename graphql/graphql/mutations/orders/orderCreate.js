import {
	GraphQLID,
	GraphQLString,
	GraphQLObjectType,
	GraphQLNonNull
  } from 'graphql';
  
  import models from '../../../models/index.js';
  import Store from '../../types/order.js';
  
  export default {
	  type: Store,
			  args: {
					material_id: {type: new GraphQLNonNull(GraphQLID)},
					store_id:{ type: new GraphQLNonNull(GraphQLID)  },
					order_state:{type: new GraphQLNonNull(GraphQLID)},
					quantity:{ type: new GraphQLNonNull(GraphQLString)},
					created_at:{type: new GraphQLNonNull(GraphQLString)}
			  },
			  resolve(root,args) {
					  return models.orders.create({
								  material_id: args.material_id,
								  store_id: args.store_id,
								  order_state: args.order_state,
								  quantity: args.quantity,
								  created_at:args.created_at
							  });
			  }
  };
  