import { useState } from 'react';
import { postContent } from '@utils/index';

interface Props {
    examId: string;
    contentId: string;
    leagueId: string;
    centreId: string;
}

const Embed = ({ examId, contentId, leagueId, centreId }: Props) => {
    const [open, setOpen] = useState(false);

    const openEmbed = () => setOpen(true);
    const closeEmbed = () => setOpen(false);

    const embed = async () => {
        try {
            let embedingContent = examId
                ? `embeded-exam/${examId}`
                : `embeded-exam/${leagueId}`;
            const result = await postContent({
                url: `/centre/${centreId}/content/${contentId}/${embedingContent}`,
            });
            alert('Content embeded');
            return result;
        } catch ({ message }) {
            alert(message);
        }
    };

    return { open, openEmbed, closeEmbed, embed };
};

export default Embed;
