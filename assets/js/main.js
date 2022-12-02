$(document).ready(function(){
    $('.stock_sliders').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
        dots: true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }

        ]
    });

    $('.news_sliders').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
        dots: true,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
                }
            }

        ]
    });

    $('.team_slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
                }
            }

        ]
    });

    $('.effect_slider,.spa_sliders').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
        dots: true,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    arrows: false,
                }
            }
        ]
    });

    $('.reviews_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    arrows: false,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    });
});


  
let galleryBlock = document.querySelectorAll('.gallery__block'),
    gallaryImg = document.querySelectorAll('.gallery__block img'),
    galleryPopup = document.querySelector('.gallery__popup'),
    galleryPopupImg = document.querySelector('.gallery__popup img'),
    allGallery = document.querySelector('.all_gallery'),
    closeGallery = document.querySelector('.close_gallery'),
    barsMenu = document.querySelector('.bars_menu'),
    barsddd = document.querySelector('.bars_menu'),
    closeNav = document.querySelector('.close_nav'),
    menuMobile = document.querySelector('.nav_mobile');


    $(function() {
        function closeGallary() {
            for (let i = 0; i < 6; i++) {
                galleryBlock[i].style.display = 'block';
                
            }
        }
            closeGallary();
    });

    $(function(){
        allGallery.addEventListener('click', ()=>{

            if(allGallery.textContent == 'Смотреть все фото') {
        
                for (let i = 0; i < galleryBlock.length; i++) {
                    setTimeout(function(){
                        galleryBlock[i].style.display = 'block';
                        allGallery.textContent = 'Скрыть все фото';
                    }, 200);        
                }
            } else {
                for (let i = 6; i < galleryBlock.length; i++) {
                    galleryBlock[i].style.display = 'none';
                    allGallery.textContent = 'Смотреть все фото';
                }
            }
        
        });
        
        for (let i = 0; i < galleryBlock.length; i++) {
            galleryBlock[i].addEventListener('click', ()=> {
                galleryPopup.classList.add('gallery__popup_active');
                let imgSrc = galleryBlock[i].lastChild.getAttribute('src');
                galleryPopupImg.setAttribute('src', imgSrc);
                console.log(imgSrc);
            });
            
        }
    });

    $(function(){
        closeGallery.addEventListener('click', ()=> {
            galleryPopup.classList.remove('gallery__popup_active');
        });
    });

    barsMenu.addEventListener('click', ()=> {
        menuMobile.classList.add('nav_mobile_activ');
    });

    closeNav.addEventListener('click', ()=> {
        menuMobile.classList.remove('nav_mobile_activ');
    });

    window.addEventListener('scroll', ()=> {
        if (this.scrollY > 100) {
            menuMobile.classList.remove('nav_mobile_activ');

        }

    });



// Аккордион ==================

$(function(){
    accordQuest = document.querySelectorAll('.accord_quest'),
    accordDescr = document.querySelectorAll('.accord_descr'),
    accordIcon = document.querySelectorAll('.accord_quest i.fa');

    accordQuest.forEach((el) => {
        el.addEventListener('click', ()=> {
            let content = el.lastElementChild;
            let icon = el.firstElementChild;
            if (content.className == "accord_descr_active") {
                accordDescr.forEach((el) => { el.classList.remove('accord_descr_active') });
                accordIcon.forEach((el) => { el.setAttribute('class', 'fa fa-chevron-down') });               
            } else {
                accordDescr.forEach((el) => { el.classList.remove('accord_descr_active') }); 
                accordIcon.forEach((el) => { el.setAttribute('class', 'fa fa-chevron-down') });
                content.classList.add('accord_descr_active');
                icon.setAttribute('class', 'fa fa-chevron-up');
            }
        });
    });

});
