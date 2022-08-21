import useStyles from './style';
import useGblobalStyle from '../../../styles';
import { useState, useEffect } from 'react';
import {
    FacebookShareButton,
    LinkedinShareButton,
    PinterestShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
} from 'react-share';
import { Facebook } from '@material-ui/icons';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import PinterestIcon from '@material-ui/icons/Pinterest';
import TelegramIcon from '@material-ui/icons/Telegram';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Input from '../input';

// export const FacebookShare = ({
//     url,
//     quote = null,
//     hashTag = null,
//     closeShow,
// }) => {
//     const style = useStyle();
//     return (
//         <FacebookShareButton
//             url={url}
//             className={style.shareIcon}
//             quote={quote}
//             hashtag={hashTag}
//         >
//             <div
//                 onClick={closeShow}
//                 title="Share via Facebook"
//                 className={style.iconContainer}
//             >
//                 <FacebookOutlined fontSize="default" style={{ color: '#36549d' }} />
//             </div>
//         </FacebookShareButton>
//     );
// };

// export const TwitterShare = ({
//     url,
//     title = null,
//     hashTag = [],
//     closeShow,
// }) => {
//     const style = useStyle();
//     return (
//         <TwitterShareButton
//             url={url}
//             className={style.shareIcon}
//             title={title}
//             hashtags={hashTag}
//         >
//             <div
//                 onClick={closeShow}
//                 title="Share via Twitter"
//                 className={style.iconContainer}
//             >
//                 <TwitterIcon fontSize="default" style={{ color: '#07abf5' }} />
//             </div>
//         </TwitterShareButton>
//     );
// };

// export const LinkedInShare = ({ url, title = null, closeShow }) => {
//     const style = useStyle();
//     return (
//         <LinkedinShareButton
//             url={url}
//             className={style.shareIcon}
//             title={title}
//         >
//             <div
//                 onClick={closeShow}
//                 title="Share via LinkedIn"
//                 className={style.iconContainer}
//             >
//                 <LinkedInIcon fontSize="default" style={{ color: '#017eb7' }} />
//             </div>
//         </LinkedinShareButton>
//     );
// };

// export const WhatsappShare = ({
//     url,
//     title = null,
//     separator = null,
//     closeShow,
// }) => {
//     const style = useStyle();
//     return (
//         <WhatsappShareButton
//             url={url}
//             className={style.shareIcon}
//             title={title}
//             separator={separator}
//         >
//             <div
//                 onClick={closeShow}
//                 title="Share via Whatsapp"
//                 className={style.iconContainer}
//             >
//                 <WhatsAppIcon fontSize="default" style={{ color: '#67df5e' }} />
//             </div>
//         </WhatsappShareButton>
//     );
// };

// export const PinterestShare = ({
//     url,
//     media = null,
//     description = null,
//     closeShow,
// }) => {
//     const style = useStyle();
//     return (
//         <PinterestShareButton
//             url={url}
//             className={style.shareIcon}
//             media={media}
//             description={description}
//         >
//             <div
//                 onClick={closeShow}
//                 title="Share via Pinterest"
//                 className={style.iconContainer}
//             >
//                 <PinterestIcon
//                     fontSize="default"
//                     style={{ color: '#e04124' }}
//                 />
//             </div>
//         </PinterestShareButton>
//     );
// };

// export const TelegramShare = ({ url, title = null, closeShow }) => {
//     const style = useStyle();
//     return (
//         <TelegramShareButton
//             url={url}
//             className={style.shareIcon}
//             title={title}
//         >
//             <div
//                 onClick={closeShow}
//                 title="Share via Telegram"
//                 className={style.iconContainer}
//             >
//                 <TelegramIcon fontSize="default" style={{ color: '#05a7f0' }} />
//             </div>
//         </TelegramShareButton>
//     );
// };
// export const CopyShare = ({ link, closeShow }) => {
//     const style = useStyle();
//     return (
//     );
// };

export default function SpeedDial({
    url,
    description,
    name,
    className = null,
    iconClassName = null,
}) {
    const styles = useStyles();
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

    return (
        <>
            <div className={`${styles.display}`}>
                <div
                    title="Copy"
                    className={`${styles.bgWhite} ${styles.icons}`}
                    onClick={() => {
                        navigator.clipboard.writeText(url);
                    }}
                >
                    <FileCopyIcon fontSize="default" />
                </div>
                <FacebookShareButton
                    url={url}
                    // className={`${styles.bgFacebook} ${styles.icons}`}
                    quote={name}
                    hashtag={state?.replace(/['"]+/g, '')}
                >
                    <div title="Share via Facebook">
                        <Facebook
                            fontSize="default"
                            // className={`${styles.bgFacebook} ${styles.icons}`}
                        />
                    </div>
                </FacebookShareButton>
                {/*    <TwitterShare
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
                /> */}
            </div>
            <div style={{ position: 'relative', marginTop: 30 }}>
                <Input defaultValue={url} variant="outlined" />
                <span
                    className={styles.copy}
                    onClick={() => {
                        navigator.clipboard.writeText(url);
                    }}
                >
                    COPY
                </span>
            </div>
        </>
    );
}
