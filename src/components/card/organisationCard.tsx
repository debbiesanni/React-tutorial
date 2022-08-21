import { ReactElement } from 'react';
import style from '../../styles/organisationCard.module.css';
import config from '../../utils/config';

interface Props {
    title: string;
    image?: string | ReactElement | null;
}
export default function Card({
    title,
    image
}: Props):ReactElement {
    return (
        <div className={style.card}>
            <img className={style.image} src={`${image}`} alt={title} />
            <h4>{title}</h4>
        </div>
    )
}