import useGlobalStyle from '../../styles';
import Image from '../shared/image';
import Dialog from '../dialog';
import useDialog from '../../hooks/useDialog';
import Profile from '../../../public/media/images/default/profile.svg';

export default function Participant({ participants }) {
    const globalStyle = useGlobalStyle();
    const { isOpen, openDialog, closeDialog } = useDialog();
    return (
        <div
            className={`${globalStyle.top1rem} ${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.flexWrp} ${globalStyle.paddingLR1rem}`}
        >
            {participants?.data?.candidates?.length > 0 ? participants?.data?.candidates?.map((e, index) => (
                <div key={index}>
                    <div
                        onClick={() => openDialog()}
                        className={`${globalStyle.displayFlex} ${globalStyle.bottom1rem} ${globalStyle.cursor} flex50`}
                    >
                        <div>
                            <Image
                                src={
                                    e.avatar
                                        ? `${e.avatar}`
                                        : Profile
                                }
                                alt="image"
                                width="40px"
                                height="40px"
                                className={globalStyle.bRadius50}
                            />
                        </div>
                        <div className={globalStyle.ml1rem}>
                            <h3>
                                {e.surname} {e.firstname}
                            </h3>
                            <div className={globalStyle.greyColor}>
                                {e.username}
                            </div>
                        </div>
                    </div>

                    <Dialog
                        content={
                            <>
                                <div className={globalStyle.textAlignCenter}>
                                    <Image
                                        src={
                                            e.avatar
                                                ? `${e.avatar}`
                                                : Profile
                                        }
                                        alt="image"
                                        width="100px"
                                        height="100px"
                                        className={globalStyle.bRadius50}
                                    />
                                    <h3>
                                        {e.surname} {e.firstname}
                                    </h3>
                                    <div>
                                        <strong>{e.phoneNumber}</strong>
                                    </div>
                                    <div>
                                        <strong>{e.username}</strong>
                                    </div>
                                    <div>
                                        <strong>{e.email}</strong>
                                    </div>
                                </div>
                            </>
                        }
                        open={isOpen}
                        handleClose={closeDialog}
                        title="Details"
                        size="xs"
                        buttons={[
                            {
                                value: 'Cancel',
                                onClick: () => closeDialog(),
                            },
                        ]}
                    />
                </div>
            )) : "No  content found"}
        </div>
    );
}
