const moment = require('moment')

module.exports = function(sequelize, DataTypes) {
    const Members = sequelize.define('Members',
    {
        id : {type: DataTypes.INTEGER, primaryKey: true, 
            autoIncrement:true},
        name : {type: DataTypes.STRING},
        password : {type: DataTypes.INTEGER},
        username : {type: DataTypes.STRING}
    })

    Members.prototype.dateFormat = (date) => (

        moment(date).format('YYYY-MM-DD')

    )

    return Members
}