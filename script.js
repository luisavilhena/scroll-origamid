const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');

function activeTab(index) {
  tabContent.forEach(function(i, index){
    i.classList.remove('ativo');
  })
  tabContent[index].classList.add('ativo');
}


tabMenu.forEach(function(i, index){
  i.addEventListener('click', function(){
    return activeTab(index);
  });
})

function scrollToSection(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute('href');
  const section = document.querySelector(href);
  const topo = section.offsetTop;

  window.scrollTo({
    top: topo,
    behavior: 'smooth',
  });

//forma alternativa
//  section.scrollIntoView({
//    behavior: 'smooth',
//    block: 'start',
//  })
}

function initAnimacaoScroll() {
  const sections = document.querySelectorAll('.js-scroll');
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')
  if (sections.length){
    const windowMetade = window.innerHeight * 0.6

    linksInternos.forEach((link) => {
      link.addEventListener('click', scrollToSection);

    })

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowMetade) < 0
        if(isSectionVisible) {
          section.classList.add('ativo')
        } else {
          section.classList.remove('ativo')
        }
      })
    }
    animaScroll()
    window.addEventListener('scroll', animaScroll)
  }
}
initAnimacaoScroll();

