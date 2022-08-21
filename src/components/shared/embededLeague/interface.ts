export interface Props {
    contentId: string;
    centre: string | any;
    className?: string;
}

export interface Add {
    contentId: string;
    centreId: string;
    leagueId?: string;
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
