import {
    GraphQLList,
    GraphQLID,
    GraphQLString,
    GraphQLNonNull
  } from 'graphql';
  
  import models from '../../../models/index.js';
  import Orders from '../../types/order.js';
  
  export default {
      type: new GraphQLList(Orders),
      args: {
          author_id: {
              type: GraphQLID
          }
      },
      resolve(root, args) {
          //return models.stores.findAll({where: args, include: [ { model: models.material } ] });
          return models.orders.findAll({where: args});
      }
  };
  