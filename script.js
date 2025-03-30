const btnList = document.querySelectorAll('.btn');
const alertBtn = document.querySelector('#alert-btn');

btnList.forEach((btn) => {
    btn.addEventListener('click', () => {
        const parent = btn.parentElement;

        parent.style.backgroundColor = 'cyan';
        parent.style.color = 'white';
        parent.style.padding = '10px';

        btn.style.backgroundColor = 'white';
        btn.style.color = 'black';

    })
})

alertBtn.addEventListener('click', () => {
    alert('Alert button clicked!');
})
