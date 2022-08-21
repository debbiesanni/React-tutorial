import { Props as PublicationProps } from '../components/card/publication';
import { lorem, date, internet } from 'faker';

const publication = [];

for (let i = 0; i < 2; i++)
    publication.push({
        title: lorem.words(7),
        description: lorem.words(30),
        textBook: lorem.words(1),
        healthScience: lorem.words(2),
        date: lorem.words(2),
        author: lorem.words(2),
        url: internet.url(),
        
    });

export default publication;
