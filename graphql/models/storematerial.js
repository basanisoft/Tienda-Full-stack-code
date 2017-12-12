module.exports = function(sequelize, DataTypes) {
    var storematerial = sequelize.define('storematerial', {
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
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        created_at: {
			type: DataTypes.DATE,
			allowNull: false,
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
