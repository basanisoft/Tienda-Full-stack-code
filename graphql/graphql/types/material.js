import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList
} from 'graphql';

import Store from './store.js';
import models from '../../models/index.js';

export default new GraphQLObjectType({
    name: 'material',
    description: 'material of some quote',
    fields () {
        return {
            id: {
                type: GraphQLID,
                description: "material's ID",
                resolve (material) {
                    return material.id;
                }
            },
            name: {
                type: GraphQLString,
                description: "author's name",
                resolve (material) {
                    return material.name;
                }
            },
            price: {
                type: GraphQLString,
                description: "Materail name",
                resolve(material){
                    return material.price
                }
            },
            image: {
                type: GraphQLString,
                description: "Materail name",
                resolve(material){
                    return material.image
                }
            },
            description: {
                type: GraphQLString,
                description: "author's last name",
                resolve (material) {
                    return material.description;
                }
            },
            quotes: {
                type: new GraphQLList(Store),
                description: "author's quotes",
                resolve(material) {
                    return models.material.findAll({ where: { author_id: material.id } });
                }
            }
        };
    }
});
