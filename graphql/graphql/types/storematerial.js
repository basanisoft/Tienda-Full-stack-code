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
    name: 'storematerial',
    description: 'storematerial',
    fields () {
        return {
            id: {
                type: GraphQLID,
                description: "quote ID",
                resolve (storematerial) {
                    return storematerial.id;
                }
            },
			material: {
				type: Material,
				description: "author of this quote",
				resolve (storematerial) {
					return models.material.findById(storematerial.material_id);
				}
            },
            store: {
				type: Store,
				description: "author of this quote",
				resolve (storematerial) {
					return models.store.findById(storematerial.store_id);
				}
            },
            quantity: {
                type: GraphQLInt,
                description: "text",
                resolve (storematerial) {
                    return storematerial.quantity;
                }
            },
            created_at: {
				type: GraphQLString,
				description: "text",
				resolve (storematerial) {
					return storematerial.create_date;
				}
            }
        };
    }
});
