const audio = document.querySelector('#audio');
const playEl = document.querySelector('.btnPlayer');
const btnClose = document.querySelector('.close-mess');
const barSum = document.querySelector(".column-bar");
const messContainer = document.querySelector('.message-container');
const letterEl = document.querySelector('.letter-container');
const contentMess = document.querySelector('.content-message');
const messBody = document.querySelector('.box .content');
const moreBtn = document.querySelector('.more-button');
const giaithich = document.querySelector('.giaithich-container');
const closeGiaithich = document.querySelector('.close-giaithich');
let app = {
    
    dataPhone : [
        {
            id:1,
            header: "Ở box nè :3",
            image: "./images/img-plane.jpg",
            letter: "Happy new year"
        }
    ],
    createHearts : function(number) {
        let slider = document.querySelector('#slide');
        for(i=0;i<number;i++) {
            let leftHearts = Math.floor(Math.random() * slider.clientWidth);
            let topHearts = Math.floor(Math.random() * slider.clientHeight);
            let widthHearts = Math.floor(Math.random() * 20);
            let timeHearts = Math.floor(Math.random() * 5 + 5);
            let blurHearts = Math.floor(Math.random() * 5);
            let div = document.createElement('div');
            div.classList.add('heart');
            div.style.left = leftHearts + "px";
            div.style.top = topHearts + "px";
            div.style.width = widthHearts + 'px';
            div.style.height = widthHearts + 'px';
            div.style.animationDuration = timeHearts + 's';
            div.style.filter = `blur(${blurHearts}px)`
            slider.appendChild(div);
        }
    }, 
    turnSlide : function() {
        let swiperCards = new Swiper(".gallery-cards", {
            loop: true,
            loopedSlide: 6,  
            cssMode: true,
            effect: 'fade',
        });
        let swiperThumbs = new Swiper(".gallery-thumbs", {
            loopedSlide:6,
            slidesPerView: 1,
            centeredSlides: true,
            slideToClickedSlide: true,
            
            navigation: {
                nextEl: ".gallery-overflow .swiper-button-next",
                prevEl: ".gallery-overflow .swiper-button-prev"
            }
        });
        swiperThumbs.controller.control = swiperCards;
    },
    settingAudio: function() {
        playEl.onclick = e=> {
            if(playEl.classList.contains('playing')){
                playEl.classList.remove('playing');
                playEl.classList.add('pausing');
                audio.pause();
            }
            else if (playEl.classList.contains('pausing')){
                playEl.classList.remove('pausing');
                playEl.classList.add('playing');
                audio.play();
            }
        }
        audio.addEventListener('ended', function() {
            playEl.classList.remove('playing');
            playEl.classList.add('pausing');
        });
        audio.onplay = e=> {
            barSum.classList.remove("ac");
        }
        audio.onpause = e =>{
            barSum.classList.add("ac");
        }
    },
    settingMessage: function() {
        letterEl.onclick = e => {
            messBody.classList.add('fly');
            messContainer.classList.add('appear');
            contentMess.classList.add('appear');
        };
        btnClose.onclick = e=>{
            messContainer.classList.remove('appear');
            contentMess.classList.remove('appear');
            if(playEl.classList.contains('playing')){
                playEl.classList.remove('playing');
            }
            if(playEl.classList.contains('pausing')) {
                playEl.classList.remove('pausing');
            }
            playEl.classList.add('pausing');
            audio.pause();
            audio.currentTime = 0;
            messBody.classList.remove('fly');
            
        }
    },
    settingApp: function() {
        moreBtn.onclick=e=> {
            giaithich.style.display = 'block';
        }
        closeGiaithich.onclick = e=>{
            giaithich.style.display = 'none';
        }
    },
    start: function() {
        this.createHearts(50);
        this.turnSlide();
        this.settingAudio();
        this.settingMessage();
        this.settingApp();
    }
}
app.start();
