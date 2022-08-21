export interface ReviewProps {
    id: string;
    rating?: number;
    contentId: string;
    comment: string;
    firstname: string;
    surname: string;
    userId: string;
    avatar: string;
    createdAt: Date;
    updatedAt: Date;
    replyCount: number;
}

