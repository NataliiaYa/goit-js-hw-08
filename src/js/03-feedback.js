// Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".
// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
// Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй бібліотеку

import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    inputarea: document.querySelector('.feedback-form input'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

let data = {
    email: ' ',
    message: ' ',
};

populateTextarea();


function onFormSubmit(evt) {
    evt.preventDefolt(); //забороняємо перезавантаження сторінки
    
    evt.currentTarget.resent(); //очищуємо форму після відправки
    localStorage.removeItem('feedback-form'); //очищуємо форму післґ відправки
    console.log(data);
    data.email = '';
    data.message = '';
};

function onTextareaInput(evt) { 
    data[e.target.name] = e.target.value; //отримуємо повідомлення і імейл

    localStorage.setItem('feedback-form', JSON.stringify(data)); //записали в локалсторейдж
};


function populateTextarea() { 
    const savedMassege = localStorage.getItem('feedback-form'); //зберігаємо значення з локалсторейдж

    if (savedMassege) {
        data = JSON.parse(savedData);
        let { email, message } = refs.form.elements;

        email.value = data.email;
        message.value = data.message;
       //перевіряємо, чи не пусте значення локалсторейдж, зберігаємо
    };
};
