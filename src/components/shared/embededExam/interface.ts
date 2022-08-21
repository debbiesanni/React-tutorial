export interface Props {
    contentId: string | any;
    centreId: string | any;
    className?: string | any;
    centre?: any;
}

export interface AddProps {
    contentId: string;
    centreId: string;
    examId?: string;
}

export interface EmbededLeague {
    id: string;
    contentId: string;
    leagueId: string;
    name: string;
    image: string;
    slug: string;
    rating: number;
    subscriberCount: number;
    centreId: string;
}