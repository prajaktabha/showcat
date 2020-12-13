module.exports = (sequelize, Sequelize) => {
    const Quize = sequelize.define("quize", {
      quizname: {
        type: Sequelize.STRING,
        unique: true
      },
      time: {
        type: Sequelize.TIME
      },
      count:{
        type: Sequelize.INTEGER
      },
      categoryid :{
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
            model:'categories',
            key:'id'
        }
    }
      
    },
    {
      timestamps:false,
      underscored:true
    });
  
    return Quize;
  };