module.exports = function(sequelize, DataTypes) {
    var material = sequelize.define('material', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'id'
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        price: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
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

	material.associate = function(models) {
        models.material.hasMany(models.storematerial, { foreignKey: "material_id", sourceKey: "id" });
    }

    return material;
}
