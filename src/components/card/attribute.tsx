import { ReactElement } from 'react';
import style from '../../styles/card.module.css';

interface Props {
    title: string;
    value?: string | number;
    icon: string;
}

const title = ({ title, value, icon }: Props): ReactElement => {
    return (
        <div className={style.cardAttributes}>
            <img src={icon} alt={title} />
            <p className={style.cardAttributeValue}>{value}</p>
            <p>{title}</p>
        </div>
    );
};

export default title;
