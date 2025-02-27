import pool from "./pool.js";

async function getAllMessages() {
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows
}

async function insertMessage(username, text) {
    await pool.query("INSERT INTO messages (username, text, added) VALUES ($1, $2, $3)", [username, text, new Date()]);
}

async function getUserByName(username) {
    const { rows } = await pool.query("SELECT * FROM messages WHERE username = $1", [username]);
    return rows
}

export default { getAllMessages, insertMessage, getUserByName }