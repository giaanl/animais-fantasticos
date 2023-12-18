
function initTabNav() {
const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');
tabContent[0].classList.add('ativo');

function activeTab(index) {
    tabContent.forEach((section) => {
        section.classList.remove('ativo');
    })
    tabContent[index].classList.add('ativo');
}
tabMenu.forEach((itenMenu, index) => {
    itenMenu.addEventListener('click', function(){
        activeTab(index);
    })
});
}
initTabNav();

function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt');
    const classActive = 'ativo';
    if(accordionList.length) {
        accordionList[0].classList.add(classActive);
        accordionList[0].nextElementSibling.classList.add(classActive);

            function activeAccordion(){
                this.classList.toggle(classActive);
                this.nextElementSibling.classList.toggle(classActive);
            }
        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        });
    }
}
initAccordion();

function internalUrl() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSection(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        const sectionTop = section.offsetTop;
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth',
        });
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });
}
internalUrl();

function initScrollAnimation(){
    const sections = document.querySelectorAll('.js-scroll');

    if(sections.length){
    const half = window.innerHeight * 0.6;

    function animationScroll() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const isSectionVisible = (sectionTop - half) < 0;
            if(isSectionVisible)
                section.classList.add('ativo');
            else 
                section.classList.remove('ativo');
            
        });
    }
    animationScroll();
    window.addEventListener('scroll', animationScroll);
}
}
initScrollAnimation()