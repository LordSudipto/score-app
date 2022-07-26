import app from ".server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
dotenv.config()

//connect to mongodb
const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 8000

MongoClient.connect(
    process.env.DB_STRING,
    {
        poolSize: 50,
        wtimeout: 2500,
        useNewUrlParse: true
    }
).catch(err => {
    console.log(err.stack)
    process.exit(1)
})