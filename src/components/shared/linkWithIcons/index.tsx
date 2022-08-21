import useGlobalStyle from '../../../styles';
import Image from '../../shared/image';

    export default function LinksWithIcon(name, icon=null, src=null, className=null) {
        const globalStyle = useGlobalStyle();
        return (
            <span
                className={`${globalStyle.displayFlex} ${globalStyle.flexColumn} ${globalStyle.alignItems} ${className}`}
            >
               {src ? 
                    <Image
                        src={src}
                        alt={name}
                        height="24px"
                        width="24px"
                    />
                : icon
                }
                {name}
            </span>
        );
    }