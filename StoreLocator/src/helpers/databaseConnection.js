import { Sequelize } from 'sequelize';
import {} from 'dotenv/config'

const sequelize = new Sequelize("StoreLocator", process.env.MSSQL_ID, process.env.MSSQL_PASSWORD, {
    port:process.env.MSSQL_PORT,
    dialect: 'mssql',
    dialectOptions: {
        encrypt: true,
        options: {
            useUTC: false,
            dateFirst: 1,
          }
      }
});

export default sequelize;