import useStyle from './style';

interface Props {
    content: JSX.Element[] | string[] | any;
}
export default function DropdownContent({ content }: Props): JSX.Element {
    const style = useStyle();
    return (
        <div>
            {content?.map((contentMap, index) => (
                <div
                    key={index}
                    onClick={() => contentMap.action()}
                    className={`${style.cursor}`}
                >
                    {contentMap.text}
                </div>
            ))}
        </div>
    );
}
