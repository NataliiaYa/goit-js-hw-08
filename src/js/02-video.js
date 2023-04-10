import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (data) {
  const roundetTime = Math.round(data.seconds);
  localStorage.setItem("videoplayer-current-time", roundetTime);
};

player.on('timeupdate', throttle(onPlay, 1000));

const currentTime = localStorage.getItem("videoplayer-current-time");
player.setCurrentTime(currentTime);