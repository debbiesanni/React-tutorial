export interface CentreProps {
    id: string;
    name: string;
    slug: string;
    logo: string | null;
    backgroundImage: string | null;
    description: string;
    examCount: number;
    leagueCount: number;
    rating: number;
    questionCount: number;
    videoCount: number;
    audioCount: number;
    bookCount: number;
    subscriberCount: number;
    allowJoinRequest: boolean;
    isPrivate: boolean;
    address: string;
    emailAddress: string;
    phoneNumber: string;
    websiteUrl: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface ExamCategoryProps {
    id: string;
    name: string;
    slug: string;
    centreId: string;
    examCount: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface OnlineCourseProps {
    id: string;
    name: string;
    slug: string;
    centreId: string;
    description: string;
    type: string;
    isPrivate: boolean;
    allowSearch: boolean;
    price: number;
    createdAt: Date;
    updatedAt: Date;
}
