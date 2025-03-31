const btnList = document.querySelectorAll('.btn');
const alertBtn = document.querySelector('#alert-btn');
const resetbtn = document.querySelector('#reset');
const btn = document.querySelector('#bottone');
const refreshBtn = document.querySelector('#refresh');
const bottone = document.querySelector('#reset-btn2');
const bottons = document.querySelector('#reset-btn3'); 

const alertMessage = document.querySelector('#alert-message');
alertMessage.addEventListener('click', () => {
    alert('Message button clicked!');
});

btnList.forEach((btn) => {
    btn.addEventListener('click', () => {
        const parent = btn.parentElement;

        parent.style.backgroundColor = 'lightblue';
        parent.style.border = '2px solid blue';
        parent.style.borderRadius = '10px';

        btn.style.backgroundColor = 'darkblue';
        btn.style.color = 'white';

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

btn.addEventListener('click', () => {
    alert('ORA SEI GAY!!!');
}
)

refreshBtn.addEventListener('click', () => {
    alert('Refresh button clicked!');
})

bottone.addEventListener('click', () => {
    alert('ORA LOLLO È GAY');
})

bottons.addEventListener('click', () => {
    alert('ciao');
})