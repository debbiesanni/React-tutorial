import Image from '../../../shared/image';
import useStyles from './style';
// import Button from '../../../button';

export default function YourPluginsCard({
    content,
    show,
    index,
    activeCard,
    // check,
    // plugin,
    // removePlugin,
    // AddPlugin,
}) {
    const styles = useStyles();
    return (
        show &&
        index === activeCard && (
            <div className={`${styles.hoverCard}`}>
                <div
                    className={`${styles.displayFlex}`}
                    style={{
                        borderBottom: '0.4px solid #C4C4C4',
                        padding: '10px 20px 0px 20px',
                    }}
                >
                    <Image
                        src={content.icon}
                        alt={content.name}
                        height={content.height}
                        width={content.width}
                        // className={styles.image}
                    />
                    <div className={styles.holder}>
                        <div className={styles.name}>{content.name}</div>
                        <div className={styles.integrated}>
                            3,423 Integrated
                        </div>
                    </div>
                </div>
                <ul style={{ padding: '20px 0px 20px 40px' }}>
                    {content.hoverDescription.map((list, index) => (
                        <li key={index} className={styles.list}>
                            {list}
                        </li>
                    ))}
                </ul>
                {/* <div className={styles.textAlignRight}>
                    <Button
                        // className={styles.btn}
                        onClick={() =>
                            check(plugin)
                                ? removePlugin(plugin)
                                : AddPlugin(plugin)
                        }
                    >
                        {check(plugin) ? 'Remove' : 'Add'}
                    </Button>
                </div> */}
            </div>
        )
    );
}
