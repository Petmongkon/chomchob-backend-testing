// Store User
const User = sequelize.define('User', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: Sequelize.STRING,
    age: Sequelize.INTEGER,
},{
    classMethods: {
        associate: function(models) {
            User.hasMany(UserCard, { foreignKey: 'user_id' })
            User.hasMany(SellOut, { foreignKey: 'user_id' })
        }
    }
})
  
// Store User credit card 
const UserCard = sequelize.define('UserCard', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    user_id: Sequelize.STRING,
    card_number: Sequelize.STRING,
    cvv: Sequelize.INTEGER
},{
    classMethods: {
        associate: function(models) {
            UserCard.belongsTo(User, { foreignKey: 'user_id' })
        }
    }
})

// Store Item detail
const Item = sequelize.defind('Item',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: Sequelize.STRING,
    detail: Sequelize.STRING,
    price: Sequelize.FLOAT,
    date_start: Sequelize.DATE,
    date_end: Sequelize.DATE,
    amount:Sequelize.INTEGER
},{
    classMethods: {
        associate: function(models){
            Item.hasMany(PromotionItem,{ foreignKey: 'item_id' })
            Item.hasMany(SellOut,{ foreignKey: 'item_id' })
        }
    }
})

// Store Promotion
const Promotion = sequelize.defind('Promotion',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: Sequelize.STRING,
    detail:Sequelize.STRING,
    date_start:Sequelize.DATE,
    date_end:Sequelize.DATE
},{
    classMethods: {
        associate: function(models){
            Promotion.hasMany(PromotionItem,{ foreignKey: 'promotion_id' })
            Promotion.hasMany(SellOut,{ foreignKey: 'promotion_id' })
        }
    }
})

// Store Promotion Item
const PromotionItem = sequelize.defind('PromotionItem',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    promotion_id: Sequelize.INTEGER,
    item_id: Sequelize.INTEGER,
},{
    classMethods:{
        associate: function(models){
            PromotionItem.belongsTo(Promotion,{ foreignKey: 'promotion_id' })
            PromotionItem.belongsTo(Item,{ foreignKey: 'item_id'})
        }
    }
})

// Store Sell out item
const SellOut = sequelize.defind('SellOut',{
    code: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    item_id: Sequelize.INTEGER,
    promotion_id:{
        type: Sequelize.INTEGER,
        allowNull: true
    },
    price: Sequelize.FLOAT,
    user_id : Sequelize.INTEGER
},{
    classMethods:{
        associate: function(models){
            SellOut.belongsTo(Promotion,{ foreignKey: 'promotion_id' })
            SellOut.belongsTo(User,{ foreignKey: 'user_id' }),
            SellOut.belongsTo(Item,{ foreignKey: 'item_id' })
        }
    }
})