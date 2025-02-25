import express from "express";
import ejs from "ejs";
import url from "url";
import path from "path";
import formRouter from "./form.js"
import userRouter from "./userRouter.js";

const app = express();

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

const messages = [
    {
      text: "Hi there!",
      user: "Armadillo",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Cappybara",
      added: new Date()
    }
];

async function getUserByName(userName) {
    return messages.find(message => message.user === userName)
}


const title = "Message App"

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }))
app.use("/new", formRouter)

app.listen(process.env.PORT, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server is running on port ${process.env.PORT}`);
    }
})

app.get("/", (req, res) => {
    res.render("index", {title: title, messages: messages})
})

app.use(userRouter)

export { getUserByName, messages }