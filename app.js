document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      const targetPosition = targetElement.getBoundingClientRect().top;

    // Height of your sticky navbar
    const navbarHeight = document.querySelector('nav').offsetHeight;

    // Scroll to the target position, adjusted for the navbar height
    window.scrollBy({
      top: targetPosition - navbarHeight,
      behavior: 'smooth'
      });
    });
  });
window.onload=function(){
    

  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  // Add click event to toggle class on the menu
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}
