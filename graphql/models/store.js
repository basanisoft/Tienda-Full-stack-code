module.exports = function(sequelize, DataTypes) {
    var store = sequelize.define('store', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'id'
        },
        store_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        description: {
			type: DataTypes.STRING,
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

	store.associate = function(models) {
        models.store.hasMany(models.storematerial, { foreignKey: "store_id", sourceKey: "id" });
    }

    return store;
}
