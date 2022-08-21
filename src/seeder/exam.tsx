import { Props as ExamProps } from '../components/card/exam';
import { lorem, random, internet } from 'faker';

const exams = [];

for (let i = 0; i < 2; i++)
    exams.push({
        title: lorem.words(5),
        description: lorem.words(20),
        rating: random.number(5),
        takeExamUrl: internet.url(),
        viewExamUrl: internet.url(),
        image: '/media/images/default/exam.svg',
    });

export default exams;
