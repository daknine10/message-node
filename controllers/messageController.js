import db from "../db/queries.js"

const title = "Message App"

async function getUserName(req, res) {
    const { username } = req.params;

    const message = await db.getUserByName(username);

    if (!message) {
        res.status(404).send("User not found");
        return
    }

    res.render("detailedMessage", { message: message })
}

async function getMessages(req, res) {
    const messages = await db.getAllMessages();
    res.render("index", {title: title, messages: messages})
}

export default { getUserName, getMessages }