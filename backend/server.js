import express from "express"
import cors from "cors"
import scores from "./api/scores.route.js"

const app = express()

app.use(cors())
app.use(express.json())             //express accpets json from get/post/...

app.use("api/v1/scores", scores)    //url for our api
app.use("*", (req, res) => res.status(404).json({error: "not found"}))  //any other url says not found

export default app
