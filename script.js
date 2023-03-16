const meuNome = document.querySelector('.meuNome');
const nome = 'Mario Marcio Sena Teixeira';

const toggleMenu = () => {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("active");
  };
  
  const menuBtn = document.querySelector(".menu-btn");
  menuBtn.addEventListener("click", toggleMenu);
  
  // scroll suave para as âncoras
  const menuItems = document.querySelectorAll(".menu a");
  
  menuItems.forEach((item) => {
    item.addEventListener("click", scrollToIdOnClick);
  });
  
  function scrollToIdOnClick(event) {
    event.preventDefault();
    const to = getScrollTopByHref(event.target) - 100;
  
    scrollToPosition(to);
  }
  
  function getScrollTopByHref(element) {
    const id = element.getAttribute("href");
    return document.querySelector(id).offsetTop;
  }
  
  function scrollToPosition(to) {
    window.scroll({
      top: to,
      behavior: "smooth",
    });
  }