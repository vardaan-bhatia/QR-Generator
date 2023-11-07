let qrbox = document.getElementById("qrbox");
let ig = document.getElementById("ig");
let bu = document.getElementById("bu");
let t = document.getElementById("t");

bu.addEventListener("click", genQR);

t.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    genQR();
  }
});
function genQR() {
  if (t.value.length > 0) {
    ig.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      t.value;
    qrbox.classList.add("show");
  } else {
    t.classList.add("error");
  }
}
