const btnList = document.querySelectorAll('.btn');
const alertBtn = document.querySelector('#alert-btn');
const resetbtn = document.querySelector('#reset');


btnList.forEach((btn) => {
    btn.addEventListener('click', () => {
        const parent = btn.parentElement;

        parent.style.backgroundColor = 'lightblue';
        parent.style.border = '2px solid blue';
        parent.style.borderRadius = '10px';

        btn.style.backgroundColor = 'darkblue';
        btn.style.color = 'red';

    })
})

alertBtn.addEventListener('click', () => {
    alert('Alert button clicked!');
})

resetbtn.addEventListener('click', () => {
    btnList.forEach((btn) => {
        const parent = btn.parentElement;

        parent.style.backgroundColor = '';
        parent.style.border = '';
        parent.style.borderRadius = '';

        btn.style.backgroundColor = '';
        btn.style.color = '';
    })
})
