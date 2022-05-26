const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }, // интегер - числовой ключ, который автоинкриминируется, то есть уникальный
  email: { type:DataTypes.STRING, unique: true}, // строковой элемент, уникальный
  password: { type:DataTypes.STRING}, 
  role: { type:DataTypes.STRING, defaultValue: "USER"}, 
})

const Basket = sequelize.define('basket', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }, 
})

const BasketToken = sequelize.define('basket_token', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }, 
})

const Token = sequelize.define('token', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }, 
  name: {type: DataTypes.STRING, unique: true, allowNull: false},
  price: {type: DataTypes.STRING, allowNull: false},
  apy: {type: DataTypes.INTEGER, defaultValue: 83},
  // info: {type: DataTypes.STRING}
})

const Type = sequelize.define('type', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }, 
  name: { type: DataTypes.STRING, unique: true, allowNull:false }
})

const Brand = sequelize.define('brand', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }, 
  name: { type: DataTypes.STRING, unique: true, allowNull:false } 
})

const Tvl = sequelize.define('TVL', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }, 
  apy_rate: { type: DataTypes.INTEGER, allowNull:false }
})

const TokenInfo = sequelize.define('token_info', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }, 
  title: { type: DataTypes.STRING, allowNull:false }, 
  description: { type: DataTypes.STRING, allowNull:false }
})

const TypeBrand = sequelize.define('type_brand', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }, 

})

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Tvl)
Tvl.belongsTo(User)
 
Basket.hasMany(BasketToken)
BasketToken.belongsTo(Basket)

Type.hasMany(Token)
Token.belongsTo(Type)

Brand.hasMany(Token)
Token.belongsTo(Brand)

Token.hasMany(Tvl)
Tvl.belongsTo(Token)

Token.hasMany(BasketToken)
BasketToken.belongsTo(Token)

Token.hasMany(TokenInfo, {as: 'info'})
TokenInfo.belongsTo(Token)

Type.belongsToMany(Brand, {through: TypeBrand }) // при туМэни-туМэни создается еще один блок в диаграммах
Brand.belongsToMany(Type,  {through: TypeBrand })

module.exports = {
  User,
  Basket,
  BasketToken,
  Token,
  Type,
  Brand,
  Tvl,
  TypeBrand,
  TokenInfo
}
