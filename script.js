let isHello = true;

function toggleMessage() {
  const msg = document.getElementById("message");
  msg.textContent = isHello ? "Hehe" : "Hello World";
  isHello = !isHello;
}
