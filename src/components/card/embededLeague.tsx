import FallBackImage from '../../../public/media/images/default/leagueImg.svg';
import useStyle from './style';
import useGlobalStyle from '../../styles';
import Image from '../shared/image';
import PeopleOutline from '@material-ui/icons/PeopleOutline';
import { allowTextLength } from '../shared/textLength';
import Attribute from '../shared/attribute';
import Link from '../shared/link';
import { Divider } from '@material-ui/core';
import Dialog from '@components/dialog';
import useDialog from '@hooks/useDialog';
import Dropdown from '@components/shared/dropdown/menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import { deleteServerData, updateServerData } from 'utils';
import useForm from '@hooks/useForm';
import Input from '@components/shared/input';
import { useAppDispatch } from '@redux/hooks';
import {
    removeEmbededLeague,
    editEmbededLeague,
} from '@redux/slice/embededLeagues';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Editor } from '../../utils/addon';
import Switch from '../shared/mapSwitch';

export interface Props {
    content: any;
    className?: string;
    index?: number;
    centre: any;
}

const ExamCard = ({
    content,
    className,
    index,
    centre,
}: Props): JSX.Element => {
    const style = useStyle();
    const globalStyle = useGlobalStyle();
    const router = useRouter();
    const { centreId } = router.query;
    const deleteLeagueDialog = useDialog();
    const editLeagueDialog = useDialog();
    const editForm = useForm(editLeagueForm);
    const dispatch = useAppDispatch();
    const [sendEditor, setSendEditor] = useState();

    const handleChangeEditor = (input) => {
        const result: any = input;
        setSendEditor(result);
    };

    useEffect(() => {
        editForm.setDefault(content);
    }, [content]);

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
                'updatedAt',
            ];
            exlude.forEach((key) => delete editForm.values[key]);
            editForm.setData('description', sendEditor);
            const { league } = await updateServerData({
                url: `/centre/${centreId}/league/${content.id}`,
                data: editForm.values,
            });
            dispatch(editEmbededLeague({ index, league: league }));
            editLeagueDialog.closeDialog();
        } catch ({ message }) {
            alert(message);
        } finally {
        }
    }

    async function deleteLeague() {
        try {
            await deleteServerData({
                url: `/centre/${centreId}/embeded-league/${content?.id}`,
            });
            dispatch(removeEmbededLeague(content));
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
        <div style={{ position: 'relative' }}>
            <Link
                className={`${style.border} ${style.cardBgBorderRadius} ${className}`}
                link={`/${centre?.slug}/${content?.centreId}/${content?.slug}/${content?.id}`}
            >
                <>
                    <div className={``}>
                        <Image
                            src={FallBackImage}
                            alt={content.name}
                            width="100%"
                            height="100%"
                        />
                    </div>
                    <div className={style.leagueCardContent}>
                        <p
                            className={`${globalStyle.boldFont} ${style.examCardTitle}`}
                        >
                            {allowTextLength(content.name, 15)}
                        </p>
                        <p className={style.examCentre}>
                            {allowTextLength(content.centreName, 25)}
                        </p>
                        <div
                            className={`${globalStyle.justifySpaceBtw} ${globalStyle.displayFlex} ${style.bottom1rem}`}
                        >
                            <Attribute
                                icon={
                                    <PeopleOutline
                                        className={globalStyle.iconColor}
                                    />
                                }
                                text="Subscribers"
                                count={content.subscriberCount}
                                className={`${style.leagueAttributeSize} ${globalStyle.greyColor}`}
                            />
                            {/* <div className="">
                                <Rating value={content.rating} />
                            </div> */}
                        </div>
                        <Divider />
                        <div
                            className={`${globalStyle.justifySpaceBtw} ${globalStyle.displayFlex} ${style.top1rem}`}
                        >
                            <div
                                className={`${globalStyle.primaryColor} ${globalStyle.boldFont}`}
                            >
                                View League
                            </div>
                        </div>
                    </div>
                </>
            </Link>
            <div
                style={{
                    position: 'absolute',
                    right: '.4rem',
                    bottom: '5.5rem',
                    cursor: 'pointer',
                }}
            >
                <Dropdown
                    menu={[
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
            </div>

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
