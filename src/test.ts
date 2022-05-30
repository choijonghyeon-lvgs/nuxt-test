import config from "#config"
import express, { json, urlencoded } from "express"

const app = express()

app.use(json())
app.use(urlencoded({ extended: false }))

export default (req: any, res: any, next: any): void => {
    app(req, res, next)
}
