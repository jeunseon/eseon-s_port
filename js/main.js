// loading page animation
let loading = document.querySelector('.loading_page');
let body = document.querySelector("body");
setTimeout(() => body.classList.add("scroll"),0),
setTimeout(() => loading.classList.add("scene1"),0),
setTimeout(() => loading.classList.add("scene2"), 1500);
setTimeout(() => loading.classList.remove("scene1", "scene2"),2500),
setTimeout(() => body.classList.remove("scroll"),2500);

let rotate = document.querySelectorAll(".rotate");
let opa = document.querySelectorAll(".opacity");
setTimeout(() => rotate.forEach(rotate => {rotate.classList.add("on")}), 2500),
setTimeout(() => {opa.forEach(opa => {opa.classList.add("on")})}, 2500)

window.onload = function(){
    // menu
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

    // skills ani
    gsap.timeline({
        scrollTrigger: {
            trigger: '.con1',
            start: '0% 100%',
            end: '100% 0%',
            toggleClass: {targets:'.listBox', className: 'textMotion'}
        }
    })

    // about textAni
    let textAniList = document.querySelectorAll('.con1 .textAni ul li');
    let textAni = gsap.timeline({repeat: -1});
    for(let i = 0; i < textAniList.length; i++){
        textAni.to(textAniList[i], 0.8 ,{ opacity:1, repeat: 1, delay:0, x:0, yoyo: true, ease: "power4.out"})
    }
    textAni.play();

    // design
    gsap.utils.toArray('.con2 .listBox li').forEach((selector, idx) => {
        ScrollTrigger.create({
            trigger: selector,
            start: '20% 70%',
            onEnter:() => {
                gsap.set(selector, {
                    rotationX:'-65deg',
                    z:'-500px',
                    opacity:0
                }),
                gsap.to(selector, {
                    rotationX:0,
                    z:0,
                    opacity:1,
                    delay: idx % 3 * 0.05
                })
            }
        })
    })

    // project
    let listBox = document.querySelectorAll('.con3 .listBox>li .subText');
    let imgBox = document.querySelector('.con3 .imgBox');
    let img = document.querySelector('.con3 .imgBox img');

    for(let i = 0; i < listBox.length; i++){
        listBox[i].addEventListener('mouseover', () => {
            img.src = `images/img${i}.jpg`;
            gsap.set(imgBox, {scale:0, opacity:0, duration:.2}),
            gsap.to(imgBox, {scale:1, opacity:1, duration:.2})
        })

        listBox[i].addEventListener('mousemove', (e) => {
            let imgBoxX = e.pageX + 20;
            let imgBoxY = e.pageY -20;
            imgBox.style.left = imgBoxX + 'px';
            imgBox.style.top = imgBoxY + 'px';
        })
        listBox[i].addEventListener('mouseout', () => {
            gsap.to(imgBox, {scale:0, opacity:0, duration:.2})
        })
    }

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

    // topButton
    gsap.timeline({
        scrollTrigger: {
            trigger: '.wrap',
            start: '5% 0%',
            end: '8% 0%',
            scrub: true
        }
    })
    .to('.top', {opacity: '.5', x:0, ease: 'none', duration: 5}, 0)

    // cursor
    const bigBall = document.querySelector('.cursor_ball_b');
    const smallBall = document.querySelector('.cursor_ball_s');
    // hover시 바뀌는 부분
    let hoverables = document.querySelectorAll('.hoverable');

    document.body.addEventListener('mousemove', onMouseMove);
    for(let i = 0; i < hoverables.length; i++){
        hoverables[i].addEventListener('mouseenter', onMouseHover);
        hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
    }

    // Move cursor
    function onMouseMove(e){
        gsap.to(bigBall, {
            duration: .4,
            x: e.pageX -15,
            y: e.pageY -15
        })
        gsap.to(smallBall, {
            duration: .1,
            x: e.pageX -5,
            y: e.pageY -7
        })
    }

    // Hover an element
    function onMouseHover(){
        gsap.to(bigBall, {
            duration: .3,
            scale: 4
        })
        gsap.to(smallBall, {
            duration: .3,
            scale: 4
        })
    }

    function onMouseHoverOut(){
        gsap.to(bigBall, {
            duration: .3,
            scale: 1
        })  
        gsap.to(smallBall, {
            duration: .3,
            scale: 1
        })  
    }
}