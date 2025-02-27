import pg from "pg";
const { Client } = pg;

const createSQL = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR (255),
    text VARCHAR (255),
    added DATE
)`;

const insertSQL =
`INSERT INTO messages (username, text, added)
VALUES 
('Armadillo', 'Hi there!', $1),
('Cappybara', 'Hello World!', $1),
('Wombat', 'Oi mate!', $1);
`;

async function main() {
    console.log("seeding...");
    const client = new Client({
        host: process.env.HOST,
        user: process.env.USER,
        database: 'messages',
        password: process.env.PASSWORD,
        port: process.env.DATABASEPORT,
    });
    console.log(client)
    await client.connect();
    await client.query(createSQL);
    await client.query(insertSQL, [new Date()]);
    await client.end();
    console.log("done");
}

main();