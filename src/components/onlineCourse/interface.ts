import { CentreProps } from '@components/Exams/singleExam';
import { UserProps } from 'redux/slice/user';

export interface ContentProps { 
    id: string;
    name: string;
    description: string;
    centreId: string;
    courseId: string;
    slug: string;
    fileUrl: string;
    moduleId: string;
    createdAt: Date;
    updatedAt: Date;
    isModule: boolean;
    format?: 'video' | 'audio' | 'document' | 'image';
    contents?: ContentProps[];
    assessments?: Array<any>;
    canStart?: boolean;
}

export interface ModuleProps {
    id: string;
    name: string;
    description: string;
    centreId: string;
    courseId: string;
    slug: string;
    isModule?: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface CourseProps {
    id: string;
    name: string;
    description: string;
    centreId: string;
    slug: string;
    imageUrl?: string;
    createdAt: Date;
    price?: number;
    isPrivate: boolean;
    allowSearch: boolean;
    subscriberCount: number;
    centreName: string;
    learnings: string[];
    type: 'COURSE' | 'FOLDER';
}

export interface CoursesProps {
    courses: CourseProps[];
    totalCount: number;
    pageId: number;
    pageCount: number;
    limit: number;
}

export interface ContentsProps {
    contents: ContentProps[];
}

export interface CoursePageProps {
    course: CourseProps;
    centre: CentreProps;
    contents: Array<ContentProps >;
    user: UserProps;
}
