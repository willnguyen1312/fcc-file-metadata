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
    .then(({ ok }) => result.innerText = `File size: ${ok} kb`);
};
