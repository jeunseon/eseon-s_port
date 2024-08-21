window.onload = function(){
    const menuOpen = document.querySelector('.menuOpen');
    const menuBox = document.querySelector('.menuBox');
    menuOpen.addEventListener('click', () => {
        menuBox.classList.toggle('on')
    });
    // menu click scroll
    const menuList = document.querySelector('.menuBox li a');

    // top 버튼
    const topBtn = document.querySelector('.top');
    topBtn.addEventListener('click', () => {
        $('body, html').animate({scrollTop:0}, 400);
        return false;
    });


    gsap .registerPlugin(ScrollTrigger);

    // visual logoWrap
    gsap.timeline({
        scrollTrigger: {
            trigger: '.visual',
            start:'100% 100%',
            end:'100% 0%',
            scrub:1,
            markers: true
        }
    })
    .to('.logoWrap #j', {x: -150, y: 350, rotate: -10, ease: 'none', duration: 5}, 0)
    .to('.logoWrap #e_1', {x: 0, y: 400, rotate: -10, ease: 'none', duration: 5}, 0)
    .to('.logoWrap #s', {x: 50, y: 300, rotate: 10, ease: 'none', duration: 5}, 0)
    .to('.logoWrap #e_2', {x: 30, y: 430, rotate: 20, ease: 'none', duration: 5}, 0)
    .to('.logoWrap #o', {x: 100, y: 290, rotate: -10, ease: 'none', duration: 5}, 0)
    .to('.logoWrap #n', {x: 50, y: 450, rotate: 20, ease: 'none', duration: 5}, 0)

    // about textAni
    let textAniList = document.querySelectorAll('.con1 .textAni ul li');
    let textAni = gsap.timeline({repeat: -1});
    for(let i = 0; i < textAniList.length; i++){
        textAni.to(textAniList[i], 0.8 ,{ opacity:1, repeat: 1, delay:0, x:0, yoyo: true, ease: "power4.out"})
    }
    textAni.play();
}
