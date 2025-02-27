import { getUserByName } from "../app.js";
import db from "../db/queries.js"

const title = "Message App"

async function getUserName(req, res) {
    const { userName } = req.params;

    const user = await getUserByName(String(userName));

    if (!user) {
        res.status(404).send("User not found");
        return
    }

    res.render("detailedMessage", { user: user.user, text: user.text, date: user.date })
}

async function getMessages(req, res) {
    const messages = await db.getAllMessages();
    res.render("index", {title: title, messages: messages})
}

export default { getUserName, getMessages }