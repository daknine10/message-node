import { Router } from "express";
import { messages } from "./app.js"

const formRouter = Router();

formRouter.get("/", (req, res) => {
    res.render("form")
})

formRouter.post("/", (req, res) => {
    messages.push({ text: req.body.message, user: req.body.user, added: new Date() })
    res.redirect("/")
})

export default formRouter