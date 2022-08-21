import { Props as CentreProps } from '../components/card/centre';
import { lorem, random, internet } from 'faker';

const centres = [];

for (let i = 0; i < 2; i++)
    centres.push({
        title: lorem.words(5),
        description: lorem.words(20),
        questionCount: random.number(20000),
        examCount: random.number(10000),
        leagueCount: random.number(500),
        rating: random.number(5),
        url: internet.url(),
        image: '/media/images/default/centre.svg',
    });

export default centres;
