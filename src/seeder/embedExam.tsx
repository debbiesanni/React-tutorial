import { Props as ExamProps } from '../components/card/embedExam';
import { lorem, random, internet } from 'faker';

const embedExams = [];

for (let i = 0; i < 2; i++)
    embedExams.push({
        title: lorem.words(5),
        description: lorem.words(20),
        rating: random.number(5),
        takeExamUrl: internet.url(),
        viewExamUrl: internet.url(),
        image: '/media/images/default/exam.svg',
    });

export default embedExams;
