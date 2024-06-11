feather.replace();

document.querySelector(".plus").addEventListener("click", function () {
  this.classList.toggle("rotate");
  document.querySelector(".icons-wrapper").classList.toggle("show");
});

document
  .getElementById("message-input")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();

      const inputText = event.target.value;

      const newDiv = document.createElement("div");
      newDiv.classList.add("text-to");

      const textDiv = document.createElement("div");
      textDiv.classList.add("text-div2");

      const p = document.createElement("p");
      p.innerText = inputText;

      textDiv.appendChild(p);

      newDiv.appendChild(textDiv);

      document.getElementById("top-container").appendChild(newDiv);

      event.target.value = "";

      const topContainer = document.getElementById("top-container");
      topContainer.scrollTop = topContainer.scrollHeight;
    }
  });
