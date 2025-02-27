import pg from "pg";
const { Pool } = pg

export default new Pool({
    host: process.env.HOST,
    user: process.env.USER,
    database: 'messages',
    password: process.env.PASSWORD,
    port: process.env.DATABASEPORT,
})