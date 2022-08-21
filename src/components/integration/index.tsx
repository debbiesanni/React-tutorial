import useStyles from './style';

export default function Intergation() {
    const styles = useStyles();
    return (
        <div className={styles.holder}>
            <h2 className={styles.title}>Integration</h2>
            <h3 className={styles.body}>
                Contentionary allows centre owners (individuals, professionals,
                firms and institutions) to integrate our API into their personal
                website, which will allow their subscribers and website visitors
                access their contents on contentionary directly from their
                websites.
            </h3>
        </div>
    );
}
