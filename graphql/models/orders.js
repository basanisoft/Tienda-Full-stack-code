module.exports = function(sequelize, DataTypes) {
    var storematerial = sequelize.define('orders', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'id'
        },
        store_id: {
            type: DataTypes.INTEGER
        },
        material_id: {
		            type: DataTypes.INTEGER
        },
        order_state: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        created_at: {
			type: DataTypes.DATE,
			allowNull: true,
			validate: {
				notEmpty: true
			}
        },
        updated_at: {
			type: DataTypes.DATE,
			allowNull: true,
			validate: {
				notEmpty: true
			}
        }
    }, {
        timestamps: false,
        freezeTableName: true
    });

	storematerial.associate = function(models) {
        models.storematerial.belongsTo(models.store, { foreignKey: "store_id", targetKey: "id" });
    }
    storematerial.associate = function(models) {
	        models.storematerial.belongsTo(models.material, { foreignKey: "material_id", targetKey: "id" });
    }

    return storematerial;
}
