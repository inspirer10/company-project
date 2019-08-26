'use strict';


console.log("disstream to kox!");

(function () {


    console.log("Bark! Bark!");

    //var jd = document.getElementByClassName('image');
    //var layer = document.getElementByClassName('layer');

    var test = document.querySelector('.ipad');



    document.querySelector(".image").addEventListener("click", function () {
        document.querySelector(".layer").classList.add('test');
        console.log('jd');
    });

    test.addEventListener("click", function () {
        console.log('jdqweewqw');
        document.querySelector(".hero").classList.add('test');
    });



})();



/*


    test.addEventListener('mouseenter', box3EventCallback);
    layer.addEventListener('mouseleave', box3EventCallback);



test.addEventListener('click', function () {
    layer.classList.add('test');
    console.log('test')
});




test.addEventListener('mouseenter') {
    layer.classList.toggle('test');
    console.log('test');
};

test.addEventListener('mouseenter',
box3EventCallback);


test.addEventListener('mouseleave',
box3EventCallback);

box3Header.addEventListener('click', function(){
	box3Header.classList.toggle('header-special');
});



*/