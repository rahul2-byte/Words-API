function content_appear() {
  let introText = document.querySelector(".text-content");
  let introPosition = introText.getBoundingClientRect().top;
  console.log(introPosition);
  let screenPosition = window.innerHeight / 2;
  console.log(screenPosition);
  if (introPosition < screenPosition) {
    introText.classList.add("text-content-appear");
  }
}
window.addEventListener("scroll", content_appear);
