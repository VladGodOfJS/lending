




let elem__input = document.querySelector('.rebuilt__input');

document = document.addEventListener('mouseup',myFunc);

function myFunc(){

    let content_window = window.getSelection().toString();
    elem__input.style.color = '#fff';
    elem__input.style.fontSize = 16 + 'px';
    elem__input.value = content_window;
}






let color_text = document.getElementById('text');




let elem = document.getElementById('text');




window.setInterval(func, 1000);
var arr = ['red', 'green', 'blue', 'olive', 'yellow', 'coral', 'purple', '#00FF00', '#191970', '#4B0082', '#800000', '#FFE4E1', '#A0522D', '#BA55D3'];
var i = 0;

function func() {
    elem.style.color = arr[i];
    i++;
    if (i >= arr.length) {
        i = 0;
    }

}





// let left = 0;
// let timer;


// function autoSlider() {
//     timer = setTimeout(function () {
//         let polosa = document.getElementById('polosa')
//         left = left - 800;
//         if (left < -4600) {
//             left = 0
//             clearTimeout(timer);
//         }
//         polosa.style.left = left + 'px';
//         autoSlider();
//     }, 1500);


// }
// autoSlider();
// function sliderLeft() {



// }
