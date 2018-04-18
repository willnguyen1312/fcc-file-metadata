const koaBody = require("koa-body");
module.exports = router => {
  router.post(
    "/api",
    koaBody({
      multipart: true
    }),
    ctx => {
      const size = ctx.request.body.files.file.size;
      ctx.body = {
        ok: size
      };
    }
  );
  router.get("/*", ctx => {
    ctx.body = `
    <!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>File Metadata</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body>
  <form>
    <input id="inputFile" type="file" id="file" />
    <button id="submit" type="submit">Upload</button>
  </form>
  <p id="result"></p>
  <script>
  const button = document.querySelector("#submit");
const inputFile = document.querySelector("#inputFile");
const result = document.getElementById('result')

button.onclick = e => {
  e.preventDefault();
  const file = inputFile.files[0];
  const data = new FormData();

  data.append("file", file);
  fetch("/api", {
    method: "POST",
    body: data
  })
    .then(res => res.json())
    .then(({ ok }) => result.innerText = 'File size: ' + ok + ' kb');
};

  </script>
</body>

</html>

    `;
  });
};
