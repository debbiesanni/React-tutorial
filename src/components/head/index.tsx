import NextHead from 'next/head';
import theme from '../../styles/theme';


interface Props {
    title: string;
    description: string;
}

const Head = ({ title, description }: Props): JSX.Element => {
    return (
        <NextHead>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="theme-color" content={theme.palette.primary.main} />
            <link rel="shortcut icon" href="contentionary.ico" />
            <link
                href="https://fonts.googleapis.com/css?family=Raleway:400,900"
                rel="stylesheet"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
                rel="stylesheet"
            />
        </NextHead> 
    );
};

export default Head;
