function hello(ctx) {
  console.log(ctx.request.body);
  ctx.body = {
    ok: "ok"
  };
}

module.exports = {
  hello
};
