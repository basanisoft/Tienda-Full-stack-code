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
                    id: {type: new GraphQLNonNull(GraphQLID)}
              },
              resolve(root,args) {
                      return models.orders.destroy({where: { id: args.id }});
              }
  };
  