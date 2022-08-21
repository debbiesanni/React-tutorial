import { Fragment } from 'react';
import useGlobalStyle from '../../../styles';
import Link from '../link';

export default function linkMap({ links, className }) {
    const globalStyle = useGlobalStyle();
    return (
        <Fragment>
            {links.map((e, index) => (
                <p key={index} className={globalStyle.paddingLR1rem}>
                    <strong>
                        <Link
                            text={e.name}
                            link={e.link}
                            className={className}
                        />
                    </strong>
                </p>
            ))}
        </Fragment>
    );
}
