import { Props as LeagueProps } from '../components/card/league';
import { lorem, random, internet } from 'faker';

const league = [];

for (let i = 0; i < 4; i++)
    league.push({
        title: lorem.words(5),
        description: lorem.words(20),
        subscriberCount: random.number(500),
        rating: random.number(5),
        url: internet.url(),
        image: '/media/images/default/league.svg',
    });

export default league;
