const Router = require("koa-router")

const router = new Router({ prefix: "/api/v1" })

router.get("/", async ctx => {
  ctx.body = "Hello World!"
})

module.exports = router
