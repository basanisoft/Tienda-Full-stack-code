import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLDate,
    GraphQLID
} from 'graphql';

import Material from './material.js';
import Store from './store.js';
import models from '../../models/index.js';

export default new GraphQLObjectType({
    name: 'orders',
    description: 'orders',
    fields () {
        return {
            id: {
                type: GraphQLID,
                description: "quote ID",
                resolve (orders) {
                    return orders.id;
                }
            },
			material: {
				type: Material,
				description: "author of this quote",
				resolve (orders) {
					return models.material.findById(orders.material_id);
				}
            },
            store: {
				type: Store,
				description: "author of this quote",
				resolve (orders) {
					return models.store.findById(orders.store_id);
				}
            },
            order_state: {
                type: GraphQLString,
                description: "text",
                resolve (orders) {
                    return orders.quantity;
                }
            },
            quantity: {
                type: GraphQLInt,
                description: "text",
                resolve (orders) {
                    return orders.quantity;
                }
            },
            created_at: {
				type: GraphQLString,
				description: "text",
				resolve (orders) {
					return orders.created_at;
				}
            },
            updated_at: {
				type: GraphQLString,
				description: "text",
				resolve (orders) {
					return orders.updated_at;
				}
            }
        };
    }
});
