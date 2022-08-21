import { ContentProps } from '../interface';
import useGlobalStyle from '@styles/index';
import {useState} from 'react';
import YouTubeIcon from '@material-ui/icons/YouTube';
import MicNoneSharpIcon from '@material-ui/icons/MicNoneSharp';
import DocumentIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/ImageOutlined';
import FileIcon from '@material-ui/icons/AttachFileOutlined';
import Toast from '../../shared/toast';
import { allowTextLength } from '../../shared/textLength';

interface Props {
    content: ContentProps;
    onClick: Function;
    canStart?: boolean;
    moduleId?: string;
}

const ContentDisplay = ({ content, onClick, canStart, moduleId}: Props) => {
    const { name, format, createdAt, description } = content;
    const gStyle = useGlobalStyle();
    const [message, setMessage] = useState('')

    const contentIcon = (
        format: 'video' | 'audio' | 'image' | 'document' | 'others'
    ) => {

        if (format === 'video')
            return (
                <YouTubeIcon
                    color={canStart || !moduleId ? 'primary' : 'disabled'}
                />
            );
        else if (format === 'audio')
            return (
                <MicNoneSharpIcon
                    color={canStart || !moduleId ? 'primary' : 'disabled'}
                />
            );
        else if (format === 'image')
            return (
                <ImageIcon
                    color={canStart || !moduleId ? 'primary' : 'disabled'}
                />
            );
        else if (format === 'document')
            return (
                <DocumentIcon
                    color={canStart || !moduleId ? 'primary' : 'disabled'}
                />
            );
        else
            return (
                <FileIcon
                    color={canStart || !moduleId ? 'primary' : 'disabled'}
                />
            );
    };

    return (
        <div
            className={`${gStyle.center} ${gStyle.top1rem}`}
            style={{ width: '100%', cursor: "pointer" }}
            onClick={() => {
                if (canStart || !moduleId) onClick();
                else setMessage('Kindly take all assessments in previous modules');
            }}
        >
            <div
                style={{ marginRight: '10px' }}
                className={`${gStyle.displayFlex} ${gStyle.alignItems}`}
            >
                {contentIcon(format)}
                <p style={{ marginLeft: 10 }}>{name}</p>
            </div>
            <div style={{ color: 'gray' }}>{allowTextLength(description, 40)}</div>
            <Toast message={message} />
        </div>
    );
};
// description
export default ContentDisplay;
