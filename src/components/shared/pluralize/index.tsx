import pluralize from 'pluralize';

interface Props {}

const Pluralize = (text: string, count?: number) => {
    if (!text || typeof text !== 'string') return '';
    return pluralize(text, count || 0);
};

export default Pluralize;
