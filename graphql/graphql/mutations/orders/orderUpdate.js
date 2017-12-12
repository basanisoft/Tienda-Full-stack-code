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
                    id:{type: new GraphQLNonNull(GraphQLID)},
                    material_id: {type: new GraphQLNonNull(GraphQLID)},
                    store_id:{ type: new GraphQLNonNull(GraphQLID)  },
                    order_state:{type: new GraphQLNonNull(GraphQLID)},
                    quantity:{ type: new GraphQLNonNull(GraphQLString)},
                    create_at:{type: new GraphQLNonNull(GraphQLString)}
              },
              resolve(root,args) {
                      return models.orders.update({
                                  store_id: args.store_id,
                                  material_id: args.material_id,
                                  order_state: args.order_state,
                                  quantity: args.quantity
                              },{where:{id:args.id}});
              }
  };
