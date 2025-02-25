import { getUserByName } from "./app.js";

export default async function getUserName(req, res) {
    const { userName } = req.params;

    const user = await getUserByName(String(userName));

    if (!user) {
        res.status(404).send("User not found");
        return
    }

    res.render("detailedMessage", { user: user.user, text: user.text, date: user.date })
}