import { Props as OnlineCoursesProps } from '../components/card/onlineCourses';
import { lorem, random, internet } from 'faker';

const onlineCourse = [];

for (let i = 0; i < 4; i++)
    onlineCourse.push({
        title: lorem.words(7),
        tutor: lorem.words(2),
        viewCount: random.number(20000),
        monthCount: random.number(5),
        url: internet.url(),
        image: '/media/images/default/onlineCourses.svg',
        avatar: '/media/images/default/tutorAvatar.svg',
    });

export default onlineCourse;
