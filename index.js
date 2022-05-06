const dotenv = require("dotenv")
const dayjs = require("dayjs")
const { cyan, blue, gray } = require("chalk")

const app = require("./src/app")

dotenv.config()

const { PORT } = process.env

app.listen(PORT, () => {
  console.log(cyan(dayjs().format("HH:mm:ss")), gray("listening on"), blue(`http://localhost:${PORT}`))
})
