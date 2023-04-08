
// Разбери документацию метода on() и начни отслеживать событие timeupdate - обновление времени воспроизведения.
// Сохраняй время воспроизведения в локальное хранилище. Пусть ключом для хранилища будет строка "videoplayer-current-time".
// При перезагрузке страницы воспользуйся методом setCurrentTime() для того чтобы возобновить воспроизведение с сохраненной позиции.
// Добавь в проект библиотеку lodash.throttle и сделай так, чтобы время воспроизведения обновлялось в хранилище не чаще чем раз в секунду.
const iframeEl=document.querySelector("#vimeo-player")
import Player from '@vimeo/player';
let throttle = require('lodash.throttle')
const player = new Player(iframeEl,
    // options:
    {
    id: 19231868,
    width: 640
    }
);

player.on('timeupdate', throttle(function(data) {
    let timeOnPlayer = data.seconds;
    try {
        localStorage.setItem("videoplayer-current-time", timeOnPlayer);
    } catch (error) {
        console.log("Sorry, we have some problem with player:", error.name);
    }
}, 1000));

if (localStorage.getItem("videoplayer-current-time")) { 
    player.setCurrentTime(JSON.parse(localStorage.getItem("videoplayer-current-time")))
}
