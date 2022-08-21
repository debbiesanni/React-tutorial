import Links from './links';
import GenerateCertificate from './generateCertificate';
import AssignCertificate from './assignCertificate';
import Tab from '../shared/tab/index';

export default function CentreContact({
    centreId,
    id,
    centreSlug,
    currentPage = null,
    contentType,
}) {
    return (
        <div>
            <Links
                centreSlug={centreSlug}
                title="Certificate"
                currentPage={currentPage}
            />
            <div style={{ padding: '40px 20px 0 20px' }}>
                <Tab
                    tabs={[
                        'Generate Certificate',
                        'Assign Certificate to subscribers',
                    ]}
                    tabPanel={[
                        <GenerateCertificate centreId={centreId} id={id} />,
                        <AssignCertificate
                            centreId={centreId}
                            id={id}
                            contentType={contentType}
                        />,
                    ]}
                    defaultActive={true}
                    line={true}
                    singleTabStyle={{ width: 700 }}
                />
            </div>
        </div>
    );
}
