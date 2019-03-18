$(() => {
    // PHOTO SLIDER

    const prevBtn = $('.banner-prev');
    const nextBtn = $('.banner-next');
    const images = $('.slider li');

    let index = 0;

    const handleNextClick = () => {

        $(images[index]).removeClass('visible');

        index >= images.length -1 ? index = 0 : index++;

        $(images[index]).addClass('visible');
    };

    const handlePrevClick = () => {

        $(images[index]).removeClass('visible');

        index === 0 ? index = images.length -1 : index--;

        $(images[index]).addClass('visible');

    };

    prevBtn.click(handlePrevClick);
    nextBtn.click(handleNextClick);


// HOVER EFFECTS ON CHAIR IMAGES

    const leftImage = $('.chairs-clair');
    const rightImage = $('.chairs-margarita');

    const hideElements = (function () {

        $(this).children().next().addClass('hidden');

    });

    const showElements = (function () {

        $(this).children().next().removeClass('hidden');

    });

    leftImage.mouseenter(hideElements);
    leftImage.mouseleave(showElements);

    rightImage.mouseenter(hideElements);
    rightImage.mouseleave(showElements);
});







