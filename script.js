function toggleDarkMode(){
  document.body.classList.toggle('dark');
}

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 1000);
  }, 1800);
});

const faqs = document.querySelectorAll(".faq-box");
faqs.forEach(faq => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});