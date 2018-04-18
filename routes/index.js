const koaBody = require("koa-body");
module.exports = router => {
  router.post("/api", koaBody({
    multipart: true,
  }), ctx => {
    const size = ctx.request.body.files.file.size
    ctx.body = {
      ok: size
    };
  });
  router.get("/*", ctx => {
    ctx.redirect("/");
  });
};
