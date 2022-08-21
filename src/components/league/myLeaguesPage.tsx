import Leagues from './centreLeague';

interface Props {
    leagues: any;
    folderId?: string;
    centreId?: string;
    user: any;
}

export default function MyLeaguesPage({
    leagues,
    folderId,
    centreId,
    user,
}: Props) {
    return (
        <Leagues
            centreId={centreId}
            folderId={folderId}
            user={user}
            leagues={leagues}
        />
    );
}
