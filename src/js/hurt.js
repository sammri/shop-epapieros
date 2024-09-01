const TOKEN = "7398533970:AAGpBcsuL3eOYRCQVshNFDiLWZai1e2Q8s8";
const CHAT_ID = "-1002157130748";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

document.getElementById('tg').addEventListener('submit', function(e) {
    e.preventDefault();

    let message = `<b>Заявка с сайта!</b>\n`;
    message += `<b>Отправитель: </b> ${this.name.value}\n`;
    message += `<b>Количество: </b> ${this.quantity.value}\n`;
    message += `<b>Почта: </b> ${this.email.value}`;

    axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: 'HTML',
        text: message
    }).then(response => {
        if(response.data.ok) {
            alert("Заявка успешно отправлена!");
        } else {
            alert("Произошла ошибка при отправке заявки.");
        }
    }).catch(error => {
        console.error("Ошибка при отправке сообщения в Telegram", error);
        alert("Произошла ошибка при отправке заявки.");
    });
});

