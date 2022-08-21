import useStyle from './style';
import useGlobalStyle from '../../styles';
import Image from '../shared/image';
import PeopleOutline from '@material-ui/icons/PeopleOutline';
import { allowTextLength } from '../shared/textLength';
import Attribute from '../shared/attribute';
import { Divider } from '@material-ui/core';
import Dialog from '@components/dialog';
import useDialog from '@hooks/useDialog';
import Dropdown from '@components/shared/dropdown/menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import { deleteServerData, updateServerData } from 'utils';
import useForm from '@hooks/useForm';
import Input from '@components/shared/input';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { removeLeague, editLeague } from '@redux/slice/league';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Editor } from '../../utils/addon';
import Switch from '../shared/mapSwitch';
import { Auth } from '../../utils';
import { HidexSDown, HideMdUp } from '../hide';

export interface Props {
    content: any;
    className?: string;
    index?: number;
}

const ExamCard = ({ content, className, index }: Props): JSX.Element => {
    const style = useStyle();
    const globalStyle = useGlobalStyle();
    const router = useRouter();
    const { centreId, pageId = 1, folderId } = router.query;
    const deleteLeagueDialog = useDialog();
    const editLeagueDialog = useDialog();
    const editForm = useForm(editLeagueForm);
    const dispatch = useAppDispatch();
    const [sendEditor, setSendEditor] = useState();
    const user = useAppSelector(({ user }) => user);
    const { leagues } = useAppSelector(({ league }) => league.centreLeagues);

    useEffect(() => {
        editForm.setDefault(content);
    }, [content]);

    const handleChangeEditor = (input) => {
        const result: any = input;
        setSendEditor(result);
    };

    async function editLeagueForm() {
        try {
            const exlude = [
                'centreName',
                'centreSlug',
                'code',
                'forumId',
                'keywords',
                'price',
                'rating',
                'reviewCount',
                'subscriberCount',
                'centreId',
                'createdAt',
                'id',
                'slug',
                'status',
                'publicCategoryId',
                'updatedAt',
                'instruction',
                'image',
            ];
            exlude.forEach((key) => delete editForm.values[key]);
            editForm.setData('description', sendEditor);
            const { league } = await updateServerData({
                url: `/centre/${centreId}/league/${content.id}`,
                data: editForm.values,
            });
            const contentLeague = {
                ...league,
                centreSlug: content.centreSlug,
                centreId: content.centreId,
                slug: content.slug,
                id: content.id,
            };
            dispatch(editLeague({ index, league: contentLeague }));
            editLeagueDialog.closeDialog();
        } catch ({ message }) {
            alert(message);
        } finally {
        }
    }

    async function deleteLeague() {
        try {
            await deleteServerData({
                url: `/centre/${centreId}/league/${content.id}`,
            });
            dispatch(removeLeague(content));
            deleteLeagueDialog.closeDialog();
        } catch ({ message }) {
            alert(message);
        } finally {
        }
    }

    const switchContent = [
        // {
        //     name: 'isPrivate',
        //     label: 'Make Private',
        //     onChange: editForm.getData,
        //     defaultValue: editForm.values.isPrivate,
        // },
        {
            name: 'isSearchable',
            label: 'Is Searchable',
            onChange: editForm.getData,
            defaultValue: editForm.values.isSearchable,
        },
    ];

    return (
        <div style={{ position: 'relative', background: 'white' }}>
            <div
                className={`${style.border} ${className} ${globalStyle.cursor}`}
                onClick={() =>
                    router.push(
                        `/${content.centreSlug}/${content.centreId}/${content.slug}/${content.id}`
                    )
                }
            >
                <div style={{ padding: 20, marginTop: 30 }}>
                    <div className={`${globalStyle.displayFlex}`}>
                        <Image
                            src={
                                content.image
                                    ? content.image
                                    : '/media/images/default/defaultImage.jpg'
                            }
                            alt={content.name}
                            width="120px"
                            height="120px"
                        />
                        <div style={{ paddingLeft: 10 }} className={``}>
                            <div
                                className={`${globalStyle.greyColor} `}
                                style={{
                                    textTransform: 'capitalize',
                                    height: 40,
                                }}
                            >
                                {allowTextLength(content.centreName, 23)}
                            </div>
                            <Attribute
                                icon={
                                    <PeopleOutline
                                        className={globalStyle.iconColor}
                                    />
                                }
                                text="Participants"
                                count={content.subscriberCount}
                                className={`${style.leagueAttributeSize} ${globalStyle.blackColor} `}
                            />
                        </div>
                    </div>
                    <h3
                        className={`cardTitle ${globalStyle.boldFont} ${style.examCardTitle} ${globalStyle.iconColor} ${globalStyle.top1rem}`}
                    >
                        {allowTextLength(content.name, 25)}
                    </h3>
                    <div
                        className={`${globalStyle.greyColor} ${style.description} cardDescription`}
                    >
                        {allowTextLength(
                            content?.description?.replace(/(<([^>]+)>)/gi, ''),
                            70
                        )}
                    </div>
                </div>
                <Divider />
                <div
                    className={`${style.yellow} ${globalStyle.blackColor} ${globalStyle.boldFont} ${globalStyle.padding1rem} ${globalStyle.textAlignCenter}`}
                >
                    View League
                </div>
            </div>
            <HidexSDown>
                <div
                    style={{
                        position: 'absolute',
                        right: '.2rem',
                        bottom: '8.5rem',
                        cursor: 'pointer',
                    }}
                >
                    {Auth(user).isManager(centreId as string) && (
                        <Dropdown
                            menu={[
                                {
                                    title: 'Edit',
                                    onClick: () => {
                                        editLeagueDialog.openDialog();
                                    },
                                },
                                {
                                    title: 'Delete',
                                    onClick: () => {
                                        deleteLeagueDialog.openDialog();
                                    },
                                },
                            ]}
                        >
                            <IconButton>
                                <MoreVertIcon />
                            </IconButton>
                        </Dropdown>
                    )}
                </div>
            </HidexSDown>
            <HideMdUp>
                <div
                    style={{
                        position: 'absolute',
                        right: '.2rem',
                        bottom: '9rem',
                        cursor: 'pointer',
                    }}
                >
                    {Auth(user).isManager(centreId as string) && (
                        <Dropdown
                            menu={[
                                {
                                    title: 'Edit',
                                    onClick: () => {
                                        editLeagueDialog.openDialog();
                                    },
                                },
                                {
                                    title: 'Delete',
                                    onClick: () => {
                                        deleteLeagueDialog.openDialog();
                                    },
                                },
                            ]}
                        >
                            <IconButton>
                                <MoreVertIcon />
                            </IconButton>
                        </Dropdown>
                    )}
                </div>
            </HideMdUp>
            <Dialog
                open={editLeagueDialog.isOpen}
                handleClose={editLeagueDialog.closeDialog}
                title="Edit League"
                size="sm"
                buttons={[
                    {
                        value: 'Edit League',
                        onClick: () => editLeagueForm(),
                    },
                ]}
            >
                <form>
                    <Input
                        placeholder="Enter League Name"
                        name="name"
                        type="text"
                        labelWidth={140}
                        onChange={(e) => editForm.getData(e)}
                        defaultValue={editForm.values.name}
                    />
                    <Input
                        placeholder="Enter League Start Date"
                        name="startDate"
                        type="date"
                        labelWidth={170}
                        onChange={(e) => editForm.getData(e)}
                        defaultValue={editForm.values.startDate}
                        className="removeDateInput"
                    />
                    <Input
                        placeholder="Enter League End Date"
                        name="endDate"
                        type="date"
                        labelWidth={160}
                        onChange={(e) => editForm.getData(e)}
                        defaultValue={editForm.values.endDate}
                        className="removeDateInput"
                    />
                    <Editor name="description" setter={handleChangeEditor} />
                    <div className={globalStyle.displayFlex}>
                        <Switch content={switchContent} />
                    </div>
                </form>
            </Dialog>
            <Dialog
                handleClose={deleteLeagueDialog.closeDialog}
                title="Delete"
                open={deleteLeagueDialog.isOpen}
                size="sm"
                buttons={[
                    {
                        value: 'Yes',
                        onClick: () => deleteLeague(),
                    },
                    {
                        value: 'No',
                        onClick: () => deleteLeagueDialog.closeDialog(),
                    },
                ]}
            >
                <div>Are you sure you want to delete this league ?</div>
            </Dialog>
        </div>
    );
};

export default ExamCard;
