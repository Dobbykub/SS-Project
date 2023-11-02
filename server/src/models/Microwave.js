module.exports = (sequelize, DataTypes) => {
    const Microwave = sequelize.define('Microwave', {
        name: DataTypes.STRING,
        power: DataTypes.STRING,
        price: DataTypes.STRING,
        usage: DataTypes.STRING,
    });

    return Microwave;
};
