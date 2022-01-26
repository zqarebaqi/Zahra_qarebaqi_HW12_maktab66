const popup = document.querySelector(".popup");
const overlay = document.querySelector(".overlay");

const formSubmit = () => {
  overlay.classList.add("show");
  popup.classList.add("show");
  setTimeout(() => location.reload(), 8000);
  return false;
};
