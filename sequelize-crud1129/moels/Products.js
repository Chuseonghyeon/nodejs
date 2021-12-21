module.exports= function(sequelize, DataTypes){

    const Products = sequelize.define('Products',
    {

        id: {type: DataTypes.INTEGER, primaryKey: true,
            autoIncrement:ture},
        name : {type: DataTypes.STRING},
        price : {type:DataTypes.INTEGER},
        description : {type: DataTypes.TEXT}

    })

    return Products

}