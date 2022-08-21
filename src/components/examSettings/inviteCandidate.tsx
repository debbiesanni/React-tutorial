import useGlobalStyle from '../../styles';
import Links from './links';
import Input from '../shared/input';
import Button from '../button';
import { useState } from 'react';
import { postContent, uploadFile } from 'utils';
import useForm from '../../hooks/useForm';
import Loading from '../shared/isLoading';
import Toast from '../shared/toast';
import Table, { ColumnProps } from '../table';

export default function CentreContact({ centreId, id, centreSlug }) {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [candidates, setCandidate] = useState([{ name: '', email: '' }]);
    const createForm = useForm(submit);
    const globalStyle = useGlobalStyle();
    const data = [
        { name: 'Emmanuel', email: 'emmanuel@example.com' },
        { name: 'Samantha', email: 'samantha@example.com' },
    ];

    async function submit() {
        setMessage('');
        try {
            setIsLoading(true);
            createForm.setDefault({ candidates });
            const { message } = await postContent({
                url: `/centre/${centreId}/exam/${id}/invite-cantidate`,
                data: createForm.values,
            });
            setMessage(message.message);
            setIsLoading(false);
            location.reload();
        } catch ({ message }) {
            setMessage(message);
            setIsLoading(false);
        }
    }
    const columns: ColumnProps[] = [
        { header: 'name', accessor: 'name' },
        { header: 'email', accessor: 'email' },
    ];
    return (
        <div>
            <Links centreSlug={centreSlug} title="Invite Candidates" />
            <div style={{ padding: '40px 20px 0 20px' }}>
                <div
                    style={{ fontSize: 16, color: '#000000', marginBottom: 20 }}
                >
                    Invite candidates to take your exam and they will get the
                    invitation link from their email.
                </div>
                <div
                    style={{
                        background: '#EDEDED',
                        border: '1px solid #C4C4C4',
                        boxShadow: 'border-box',
                        borderRadius: 5,
                        padding: 20,
                    }}
                >
                    <div className={globalStyle.bottom1rem}>
                        <span style={{ fontWeight: 600, fontSize: 16 }}>
                            Invite Candidates via CSV
                        </span>
                        <span style={{ fontWeight: 400, fontSize: 14 }}>
                            (For bulk exam candidates, upload CSV file).
                        </span>
                    </div>
                    <div
                        style={{
                            background: '#ffffff',
                            padding: '10px 20px',
                            borderRadius: 5,
                            textAlign: 'right',
                            marginBottom: 20,
                        }}
                    >
                        <input
                            type="file"
                            name="file"
                            onChange={async (e) => {
                                const imageUrl = await uploadFile(e);
                                createForm.setData('fileUrl', imageUrl);
                            }}
                        />
                    </div>

                    <div
                        style={{
                            fontWeight: 600,
                            fontSize: 14,
                        }}
                    >
                        Below is an example of how you should type the
                        candidates’ name and emails in the <br />
                        csv file, with name and email as the table column-title
                        in lowercase.
                    </div>
                    <div className={globalStyle.top1rem} style={{ width: 350 }}>
                        <Table data={data} columns={columns} />
                    </div>
                </div>
                <h4 className={globalStyle.mt2rem}>OR</h4>
                <div className={globalStyle.top1rem} style={{ fontSize: 16 }}>
                    Invite candidates directly by typing their name and email
                    manually using the input fields below and click "Add more
                    candidate button" if you have more users to add..
                </div>
                {candidates?.map(({ name, email }, index) => (
                    <div key={index}>
                        <h4 className={`${globalStyle.textAlignCenter}`}>
                            {++index}
                        </h4>
                        <Input
                            id={`email${index}`}
                            type="text"
                            placeholder={`Enter Email`}
                            onChange={(e) => {
                                candidates[index].email = e.target.value;
                                setCandidate([...candidates]);
                            }}
                            required
                            style={{ width: 400 }}
                        />
                        <Input
                            id="name"
                            type="text"
                            placeholder={`Enter Name`}
                            onChange={(e) => {
                                candidates[index].name = e.target.value;
                                setCandidate([...candidates]);
                            }}
                            required
                            style={{ width: 400 }}
                        />
                    </div>
                ))}
                <div className={` ${globalStyle.bottom1rem}`}>
                    <Button
                        onClick={() => {
                            candidates.push({ name: '', email: '' });
                            setCandidate([...candidates]);
                        }}
                        color="primary"
                        variant="outlined"
                        className={`${globalStyle.bottom1rem} ${globalStyle.top1rem}`}
                    >
                        Add More Candidate
                    </Button>
                </div>
                <div
                    className={`${globalStyle.displayFlex} ${globalStyle.justifyFlexEnd}`}
                >
                    <Button
                        onClick={() => createForm.submit()}
                        color="primary"
                        variant="contained"
                        className={`${globalStyle.bottom1rem} ${globalStyle.top1rem}`}
                    >
                        Invite Candidates {isLoading && <Loading />}
                    </Button>
                </div>
            </div>

            {message && <Toast message={message} />}
        </div>
    );
}
