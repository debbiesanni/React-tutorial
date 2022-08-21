import useStyle from './style';
import useGblobalStyle from '../../../styles';
import { useState, useEffect } from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import {
    FacebookShareButton,
    LinkedinShareButton,
    PinterestShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
} from 'react-share';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import PinterestIcon from '@material-ui/icons/Pinterest';
import TelegramIcon from '@material-ui/icons/Telegram';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ShareIcon from '@material-ui/icons/Share';

export const FacebookShare = ({
    url,
    quote = null,
    hashTag = null,
    closeShow,
}) => {
    const style = useStyle();
    return (
        <FacebookShareButton
            url={url}
            className={style.shareIcon}
            quote={quote}
            hashtag={hashTag}
        >
            <div
                onClick={closeShow}
                title="Share via Facebook"
                className={style.iconContainer}
            >
                <FacebookIcon fontSize="default" style={{ color: '#36549d' }} />
            </div>
        </FacebookShareButton>
    );
};

export const TwitterShare = ({
    url,
    title = null,
    hashTag = [],
    closeShow,
}) => {
    const style = useStyle();
    return (
        <TwitterShareButton
            url={url}
            className={style.shareIcon}
            title={title}
            hashtags={hashTag}
        >
            <div
                onClick={closeShow}
                title="Share via Twitter"
                className={style.iconContainer}
            >
                <TwitterIcon fontSize="default" style={{ color: '#07abf5' }} />
            </div>
        </TwitterShareButton>
    );
};

export const LinkedInShare = ({ url, title = null, closeShow }) => {
    const style = useStyle();
    return (
        <LinkedinShareButton
            url={url}
            className={style.shareIcon}
            title={title}
        >
            <div
                onClick={closeShow}
                title="Share via LinkedIn"
                className={style.iconContainer}
            >
                <LinkedInIcon fontSize="default" style={{ color: '#017eb7' }} />
            </div>
        </LinkedinShareButton>
    );
};

export const WhatsappShare = ({
    url,
    title = null,
    separator = null,
    closeShow,
}) => {
    const style = useStyle();
    return (
        <WhatsappShareButton
            url={url}
            className={style.shareIcon}
            title={title}
            separator={separator}
        >
            <div
                onClick={closeShow}
                title="Share via Whatsapp"
                className={style.iconContainer}
            >
                <WhatsAppIcon fontSize="default" style={{ color: '#67df5e' }} />
            </div>
        </WhatsappShareButton>
    );
};

export const PinterestShare = ({
    url,
    media = null,
    description = null,
    closeShow,
}) => {
    const style = useStyle();
    return (
        <PinterestShareButton
            url={url}
            className={style.shareIcon}
            media={media}
            description={description}
        >
            <div
                onClick={closeShow}
                title="Share via Pinterest"
                className={style.iconContainer}
            >
                <PinterestIcon
                    fontSize="default"
                    style={{ color: '#e04124' }}
                />
            </div>
        </PinterestShareButton>
    );
};

export const TelegramShare = ({ url, title = null, closeShow }) => {
    const style = useStyle();
    return (
        <TelegramShareButton
            url={url}
            className={style.shareIcon}
            title={title}
        >
            <div
                onClick={closeShow}
                title="Share via Telegram"
                className={style.iconContainer}
            >
                <TelegramIcon fontSize="default" style={{ color: '#05a7f0' }} />
            </div>
        </TelegramShareButton>
    );
};
export const CopyShare = ({ link, closeShow }) => {
    const style = useStyle();
    return (
        <span
            title="Copy"
            style={{ cursor: 'pointer' }}
            className={style.iconContainer}
            onClick={() => {
                navigator.clipboard.writeText(link);
                closeShow();
            }}
        >
            <FileCopyIcon fontSize="default" style={{ color: '#000' }} />
        </span>
    );
};

export default function SpeedDial({
    url,
    description,
    name,
    className = null,
    children = null,
    iconClassName = null,
    childrenClass = null,
}) {
    const globalStyle = useGblobalStyle();
    const [state, setState] = useState<string>();
    const [show, setShow] = useState(false);

    useEffect(() => {
        function removeHTML(str) {
            var tmp = document.createElement('DIV');
            tmp.innerHTML = str;
            return tmp.textContent || tmp.innerText || '';
        }
        setState(removeHTML(`${description}\n`));
    }, []);

    const handleClick = () => {
        setShow((prev) => !prev);
    };

    const handleClickAway = () => {
        setShow(false);
    };

    return (
        <div className={`${className ? className : globalStyle.shareButton}`}>
            <ClickAwayListener onClickAway={handleClickAway}>
                {children ? (
                    <div
                        className={childrenClass}
                        onClick={() => handleClick()}
                    >
                        {children}
                    </div>
                ) : (
                    <p
                        className={globalStyle.shareTitle}
                        onClick={() => handleClick()}
                    >
                        <ShareIcon />
                    </p>
                )}
            </ClickAwayListener>
            {show && (
                <div className={iconClassName}>
                    <FacebookShare
                        url={url}
                        quote={`${name} `}
                        hashTag={state?.replace(/['"]+/g, '')}
                        closeShow={() => setShow(false)}
                    />
                    <TwitterShare
                        url={url}
                        title={`${name} `}
                        hashTag={[state?.replace(/['"]+/g, '')]}
                        closeShow={() => setShow(false)}
                    />
                    <LinkedInShare
                        url={url}
                        title={`${name} `}
                        closeShow={() => setShow(false)}
                    />
                    <WhatsappShare
                        url={url}
                        title={`${name} `}
                        separator={state?.replace(/['"]+/g, '')}
                        closeShow={() => setShow(false)}
                    />
                    <PinterestShare
                        url={url}
                        media={`${name} `}
                        description={state?.replace(/['"]+/g, '')}
                        closeShow={() => setShow(false)}
                    />
                    <TelegramShare
                        url={url}
                        title={`${name} `}
                        closeShow={() => setShow(false)}
                    />

                    <CopyShare link={url} closeShow={() => setShow(false)} />
                </div>
            )}
        </div>
    );
}
