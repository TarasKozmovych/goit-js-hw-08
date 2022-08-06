import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const video = document.querySelector('iframe');
const player = new Player(video);
player.on('timeupdate', throttle(videoTime, 1000));
function videoTime(time) {
    localStorage.setItem(
        'videoplayer-current-time',
        JSON.stringify(time.seconds)
    );
}
const saveVideoTime = localStorage.getItem('videoplayer-current-time');
if (saveVideoTime) player.setCurrentTime(saveVideoTime);