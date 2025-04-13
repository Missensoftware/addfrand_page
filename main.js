
let isstatus = document.querySelector('h5');
let btn = document.querySelector('.add');

let chak = 0;
btn.addEventListener('click', function(){
    if (chak == 0) {
        isstatus.innerHTML = 'Frand';
        isstatus.style.color = 'green'
        btn.classList.add('remove');
        btn.innerHTML = 'Remove Frand';

        chak = 1;
    } else {
        isstatus.innerHTML = 'Stanger';
        isstatus.style.color = 'red';

        btn.classList.remove('remove');
        btn.innerHTML = 'add Frand';

        chak = 0;
    }
});
