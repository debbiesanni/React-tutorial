import Link from '../shared/link';
import useGlobalStyle from '../../styles';
import { useState } from 'react';

export default function MarketPlace() {
    const globalStyle = useGlobalStyle();
    const [active, setActive] = useState('');
    const links = [
        { text: 'Centers', link: '/public-centres' },
        { text: 'Exams', link: '/public-exams' },
        { text: 'Leagues', link: '/public-leagues' },
        {
            text:`OnlineCourses` ,
            link: '/public-online-courses-page',
        },
        { text: 'Publication', link: '/public-publications-page' },
    ];

    return (
        <div
            style={{ overflow: 'auto' }}
            className={`${globalStyle.contentWidth} ${globalStyle.boldFont} ${globalStyle.displayFlex}`}
        >
            {links.map(({ text, link }, index) => (
                <div onClick={() => setActive(text)}>
                    <Link
                        key={index}
                        text={text}
                        link={link}
                        className={`${globalStyle.mr2rem} ${
                            globalStyle.greyColor
                        } ${active === text ? globalStyle.underLine : ''}`}
                    />
                </div>
            ))}
        </div>
    );
}
