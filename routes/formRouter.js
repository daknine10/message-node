import { Router } from "express";
import db from "../db/queries.js"

const formRouter = Router();

formRouter.get("/", (req, res) => {
    res.render("form")
})

formRouter.post("/", async (req, res) => {
    const { username, message } = req.body
    await db.insertMessage(username, message)
    res.redirect("/")
})

export default formRouter