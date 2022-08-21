import { Props as AudioProps } from '../components/card/audio';
import { lorem, random, internet } from 'faker';

const audios = [];

for (let i = 0; i < 2; i++)
    audios.push({
        title: lorem.words(5),
        singer: lorem.words(2),
        environment: lorem.words(1),
        image: '/media/images/default/audioCard.svg',
        playImage: '/media/images/default/audioPlay.svg',
        deleteImage: '/media/images/default/delete.svg',
        downloadImage: '/media/images/default/download.svg',
        listenCount: random.number(5),
        rating: random.number(5),
    });

export default audios;
