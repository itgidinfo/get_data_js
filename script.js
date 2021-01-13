document.querySelector('.b-1').addEventListener('click', () => {
    // let data = document.querySelector('.i-1').value;
    // document.querySelector('.out-1').innerHTML += data;
    document.querySelector('.i-1').value = 123;
});

document.querySelector('.b-2').addEventListener('click', () => {
    let data = +document.querySelector('.i-2').value; //4 
    document.querySelector('.out-2').innerHTML += data;
});

document.querySelector('.b-3').addEventListener('click', () => {
    let data = document.querySelector('.i-3').value;
    document.querySelector('.out-3').innerHTML = data;
});

document.querySelector('.b-4').addEventListener('click', () => {
    let data = document.querySelector('.i-4').value;
    document.querySelector('.out-4').innerHTML = data;
});

document.querySelector('.i-5').addEventListener('input', () => {
    let data = document.querySelector('.i-5').value;
    document.querySelector('.out-5').innerHTML = data;
});

document.querySelector('.b-6').addEventListener('click', () => {
    // let data = document.querySelector('.i-6').value;
    // if (document.querySelector('.i-6').checked) {
    //     document.querySelector('.out-6').innerHTML = data;
    // }
    // else {
    //     document.querySelector('.out-6').innerHTML = '';
    // }
    if (document.querySelector('.i-6').checked) {
        document.querySelector('.i-6').checked = false;
    }
    else {
        document.querySelector('.i-6').checked = true;
    }
});

document.querySelector('.b-7').addEventListener('click', () => {
    let radio = document.querySelectorAll('.i-7');
    // radio[1].checked = true;
    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            data = radio[i].value;
            break;
        }
    }
    document.querySelector('.out-7').innerHTML = data;
});

document.querySelector('.b-8').addEventListener('click', () => {
    let data = document.querySelector('.i-8').value;
    document.querySelector('.out-8').innerHTML = data;
});

document.querySelector('.b-10').addEventListener('click', () => {
    let data = document.querySelector('.s-10').value;
    document.querySelector('.out-10').innerHTML = data;
    // document.querySelector('.s-10').value = 'winamp';
});

document.querySelector('.b-11').addEventListener('click', () => {
    let data = document.querySelector('.t-11').value;
    document.querySelector('.out-11').innerHTML = data;
});

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const form = document.querySelector('form');
    console.dir(form.elements.myselect.value);
    form.reset(); // очистить форму
});
