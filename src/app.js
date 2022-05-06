const Koa = require("koa")
const logger = require("koa-logger")
const cors = require("@koa/cors")
const json = require("koa-json")
const helmet = require("koa-helmet")
const compress = require("koa-compress")
const bodyParser = require("koa-bodyparser")
const { cyan } = require("chalk")
const dayjs = require("dayjs")

const router = require("./routes")

const app = new Koa()

app
  .use(logger({ transporter }))
  .use(cors({ origin: "/", credentials: true }))
  .use(json())
  .use(helmet())
  .use(compress())
  .use(bodyParser())
  .use(router.routes())

module.exports = app

function transporter(str) {
  console.log(cyan(dayjs().format("HH:mm:ss"), str))
}
