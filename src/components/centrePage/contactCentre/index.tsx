import Dialog from '../../dialog';
import useDialog from '../../../hooks/useDialog';
import ContactPhone from '@material-ui/icons/ContactPhone';
import Language from '@material-ui/icons/Language';
import Email from '@material-ui/icons/Email';

export default function CentreContact({ centre, children }) {
    const { closeDialog, openDialog, isOpen } = useDialog();

    const contactAddress = [
        {
            name: 'Call Us:',
            text: centre?.phoneNumber ? centre?.phoneNumber : 'Not available',
            icon: ContactPhone,
            // className: style.contactBg,
        },
        {
            name: 'Email',
            text: centre?.emailAddress ? centre?.emailAddress : 'Not available',
            icon: Email,
            // className: style.emailBg,
        },
        {
            name: 'Visit Our Site:',
            text: centre?.websiteUrl ? centre?.websiteUrl : 'Not available',
            icon: Language,
            // className: style.languageBg,
        },
        {
            name: 'Visit Us Address',
            text: centre?.address ? centre?.address : 'Not available',
            icon: ContactPhone,
            // className: style.addressBg,
        },
    ];
    return (
        <>
            <div style={{ cursor: 'pointer' }} onClick={() => openDialog()}>
                {children}
            </div>
            <Dialog
                open={isOpen}
                handleClose={closeDialog}
                title="Contact Details"
                size="sm"
            >
                <div>
                    {contactAddress.map((content, index) => (
                        <div key={index} style={{ padding: '1rem', textAlign: 'center' }}>
                            <div>
                                <content.icon />
                            </div>
                            <div>{content.name}</div>
                            <div>{content.text}</div>
                        </div>
                    ))}
                </div>
            </Dialog>
        </>
    );
}
