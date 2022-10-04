// event of resize dom
var state = 0;

function myFunction() {
    var w = window.outerWidth;
    var h = window.outerHeight;
    if (w > 767 & state == 0) { 
        state = 1;

        // sliceA
        document.getElementById('slideA_1').classList.remove('slideA');
        document.getElementById('slideA_2').classList.remove('slideA');
        document.getElementById('slideA_3').classList.remove('slideA');
        document.getElementById('slideA_1').classList.remove('hidden');
        document.getElementById('slideA_2').classList.remove('hidden');
        document.getElementById('slideA_3').classList.remove('hidden');

        // slideB
        document.getElementById('slideB_1').classList.remove('slideB');
        document.getElementById('slideB_2').classList.remove('slideB');
        document.getElementById('slideB_1').classList.remove('hidden');
        document.getElementById('slideB_2').classList.remove('hidden');
    } else if (w < 767 & state == 1) {
        state = 0;
 
        // slideB
        document.getElementById('slideA_1').classList.add('slideA');
        document.getElementById('slideA_2').classList.add('slideA');
        document.getElementById('slideA_3').classList.add('slideA');
        // document.getElementById('slideA_1').classList.add('hidden');
        document.getElementById('slideA_2').classList.add('hidden');
        document.getElementById('slideA_3').classList.add('hidden');

        // slideB
        document.getElementById('slideB_1').classList.add('slideB');
        document.getElementById('slideB_2').classList.add('slideB');
        // document.getElementById('slideB_1').classList.add('hidden');
        document.getElementById('slideB_2').classList.add('hidden');
    }
}

// Carousel slide B

// set the default active slideA to the first one
let slideAIndex = 1;
showslideA(slideAIndex);

// change slideA with the prev/next button
function moveslideA(moveStep) {
    showslideA(slideAIndex += moveStep);
}

function moveslideA(moveStep) {
    showslideA(slideAIndex += moveStep);
}

// change slideA with the dots
function currentslideA(n) {
    showslideA(slideAIndex = n);
}

function showslideA(n) {
    let i;
    const slideAs = document.getElementsByClassName("slideA");
    // const dots = document.getElementsByClassName('dot');
    
    if (n > slideAs.length) { slideAIndex = 1 }
    if (n < 1) { slideAIndex = slideAs.length }

    // hide all slideAs
    for (i = 0; i < slideAs.length; i++) {
        slideAs[i].classList.add('hidden');
    }

    // remove active status from all dots
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].classList.remove('bg-yellow-500');
    //     dots[i].classList.add('bg-green-600');
    // }

    // show the active slideA
    slideAs[slideAIndex - 1].classList.remove('hidden');

    // highlight the active dot
    // dots[slideAIndex - 1].classList.remove('bg-green-600');
    // dots[slideAIndex - 1].classList.add('bg-yellow-500');
}


// Carousel Slid B

// set the default active slideB to the first one
let slideBIndex = 1;
showslideB(slideBIndex);

// change slideB with the prev/next button
function moveslideB(moveStep) {
    showslideB(slideBIndex += moveStep);
}

function moveslideB(moveStep) {
    showslideB(slideBIndex += moveStep);
}

// change slideB with the dots
function currentslideB(n) {
    showslideB(slideBIndex = n);
}

function showslideB(n) {
    let i;
    const slideBs = document.getElementsByClassName("slideB");
    // const dots = document.getElementsByClassName('dot');
    
    if (n > slideBs.length) { slideBIndex = 1 }
    if (n < 1) { slideBIndex = slideBs.length }

    // hide all slideBs
    for (i = 0; i < slideBs.length; i++) {
        slideBs[i].classList.add('hidden');
    }

    // remove active status from all dots
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].classList.remove('bg-yellow-500');
    //     dots[i].classList.add('bg-green-600');
    // }

    // show the active slideB
    slideBs[slideBIndex - 1].classList.remove('hidden');

    // highlight the active dot
    // dots[slideBIndex - 1].classList.remove('bg-green-600');
    // dots[slideBIndex - 1].classList.add('bg-yellow-500');
}

// slide init
if ( window.outerWidth > 767) {
    // slideA
    document.getElementById('slideA_3').classList.remove('hidden');
    document.getElementById('slideA_2').classList.remove('hidden');
    // slideB
    document.getElementById('slideB_2').classList.remove('hidden');

} else {
    // slideA
    document.getElementById('slideA_3').classList.add('hidden');
    document.getElementById('slideA_2').classList.add('hidden');
    // slideB
    document.getElementById('slideB_2').classList.add('hidden');
}