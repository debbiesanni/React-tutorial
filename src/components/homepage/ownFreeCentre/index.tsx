import DisplayContentFlex from '../../flexContentWithImage';
import { session } from '../../../utils';

interface Props {
    user?: any;
    allowFlexCol: any;
}
export default function OwnFreeCentre({ allowFlexCol, user }: Props) {
    const userDetails = user || session.get('user');
    const isLoggedIn = userDetails ? true : false;
    const content = {
        title: 'OWN A FREE CENTER',
        subTitle: 'The magic of a center',
        description:
            'Create a free center and manage your contents. Your personal online classroom to teach online, conduct online exams, sell contents and host online competitions at no cost.',
        btnText: 'create a centre',
        link: isLoggedIn ? `/my-centres` : `/login`,

        image: '/media/images/default/freeCentreImg.svg',
    };
    return <DisplayContentFlex content={content} allowFlexCol={allowFlexCol} />;
}
