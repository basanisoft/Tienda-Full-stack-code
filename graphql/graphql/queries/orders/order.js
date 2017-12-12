import {
    GraphQLID,
    GraphQLString,
    GraphQLNonNull
  } from 'graphql';
  
  import models from '../../../models/index.js';
  import orders from '../../types/order.js';
  
  export default {
      type: orders,
      args: {
          author_id: {
              type: new GraphQLNonNull(GraphQLID)
          }
      },
      resolve(root, args) {
          return model.orders.findById(args.id);
      }
  };