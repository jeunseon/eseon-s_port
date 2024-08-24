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
            scrub:1
        }
    })
    .to('.logoWrap #j', {x:-150, y:250, rotate:20, ease:'none', duration:5,}, 0)
    .to('.logoWrap #e_1', {x:-30, y:150, rotate:-10, ease:'none', duration:5,}, 0)
    .to('.logoWrap #s', {x:0, y:400, rotate:-10, ease:'none', duration:5,}, 0)
    .to('.logoWrap #e_2', {x:50, y:300, rotate:10, ease:'none', duration:5,}, 0)
    .to('.logoWrap #o', {x:100, y:100, rotate:-10, ease:'none', duration:5,}, 0)
    .to('.logoWrap #n', {x:50, y:450, rotate:20, ease:'none', duration:5,}, 0)   

    // about skill 가로 스크롤
    ScrollTrigger.matchMedia({
        '(min-width: 1024px)':function(){
            let list = gsap.utils.toArray('.con1 .box .listBox li');
            let scrollTween = gsap.to(list, {
                xPercent: -100 * (list.length -1),
                ease: 'none',
                scrollTrigger: {
                    trigger: '.con1 .box',
                    pin: true,
                    scrub: 1,
                    start: 'center center',
                    end: '300%',
                    markers: true
                }
            });
        }
    })

    // about textAni
    let textAniList = document.querySelectorAll('.con1 .textAni ul li');
    let textAni = gsap.timeline({repeat: -1});
    for(let i = 0; i < textAniList.length; i++){
        textAni.to(textAniList[i], 0.8 ,{ opacity:1, repeat: 1, delay:0, x:0, yoyo: true, ease: "power4.out"})
    }
    textAni.play();



    // footer logoWrap
    gsap.timeline({
        scrollTrigger: {
            trigger: '.footer',
            start: '0% 100%',
            end: '100% 0%',
            scrub: 1
        }
    })
    .to('.logoWrap', {top: '20%', ease: 'none', duration: 5}, 0)
}