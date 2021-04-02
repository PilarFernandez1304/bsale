import Sequelize from 'sequelize';

const sequelize = new Sequelize('DQX6AZLhQt','DQX6AZLhQt','Qz6wFUtFFF',{
    host:'remotemysql.com',
    port:'3306',
    dialect:'mysql',
    define:{
        timestamps:false
    },
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    },
    operatorAliase:false
})
export default sequelize