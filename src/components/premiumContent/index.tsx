import React, { ReactNode, useState } from 'react';
import useGlobalStyle from '../../styles';
import theme from '../../styles/theme'
import MenuItem from '@material-ui/core/MenuItem';
import Loading from '@components/shared/isLoading';
import Button from '@components/button';
import ProgressBar from "@components/shared/isLoading/progressBar";
import { uploadFile, postContent, session } from '../../utils';
import useForm from '../../hooks/useForm';
import {makeStyles} from '@material-ui/core/styles';
import NativeInput from '@components/shared/input/native';
import Select from '@components/shared/select'; 

const useStyle = makeStyles({
    root: {
        // height: '100vh',
        background: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '2rem',
        borderTop: '1px solid rgba(0, 0, 0, 0.31)',
        [theme.breakpoints.down('sm')]: {
            paddingTop: '4rem',
        },
    },
    title: {
        fontFamily: 'Open Sans, Arial',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '25px',
        lineHeight: '34px',
        color: '#F57E27',
        marginBottom: '3rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '20px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '15px',
        },
    },
    formContainer: {
        background: '#FFFFFF',
        border: '1px solid #DDDDDD',
        boxSizing: 'border-box',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
        borderRadius: '15px 15px 0px 0px',
        width: '600px',
        padding: '2rem 2rem 5rem 2rem',
        marginBottom: '5rem',
        [theme.breakpoints.down('xs')]: {
            width: '300px'
        },
    },
    formTitle: {
        fontFamily: 'Open Sans, Arial',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '16px',
        lineHeight: '22px',
        color: '#555555',
        marginBottom: '2rem'
    },
    formInput: {
        padding: '.7rem 1rem',
        marginBottom: '1rem',
        width: '100%',
        fontSize: '14px',
        lineHeight: '19px',
        borderRadius: 5,
        border: '1px solid #DDDDDD'
    },
})

export default function PremiumContent() {

    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [progressUpload, setProgressUpload] = useState<number>(0)
    const [listOfCategory, setListOfCategory] = useState<any>([{id: 1, name: 'PUBLICATION'}, {id: 2, name: 'COURSE'}]);
    const style = useStyle();
    const createForm = useForm(submit);


    async function submit() {
        setMessage('');
        
        try {
            setIsLoading(true);
            if (createForm.values.fileUrl) {
                setProgressUpload(0)
                const fileUrl = await uploadFile(createForm.values.fileUrl);
                createForm.setData('fileUrl', fileUrl);
                setProgressUpload(100)
            }
            const learnings = createForm.values.learnings;
            if (learnings && typeof learnings === 'string') {
                createForm.setData('learnings', createForm.values.learnings.split(','));
            }
            const data = await postContent({
                url: `/premium-centre/submit-application`,
                data: createForm.values,
            }); 
            setMessage('Content created Successfully Added');
            setIsLoading(false);
            location.reload()
        } catch ({ message }) {
            setIsLoading(false);
            setMessage(message); 
            setProgressUpload(0)
        }
    }


    const selectContent = listOfCategory?.map((category, index) => {
        return (
            <MenuItem
                key={index}
                value={category.name}
                onClick={() => {}}
                id={category.id}
            >
                {category.name}
            </MenuItem>
        );
    });


    return (
            <div className={`${style.root}`}>
                <h1 className={style.title}>Add your Contents to Contentionary’s Premium centres and earn royalties monthly.</h1>
                <div className={style.formContainer}>
                    <h3 className={style.formTitle}>Please fill the form below to upload your video or publication</h3>
                    <NativeInput
                        placeholder="Name of content"
                        name="name"
                        type="text"
                        value={createForm.values.name}
                        onChange={(e) => createForm.getData(e)}
                        className={style.formInput}
                    />
                    <NativeInput
                        placeholder="Description of Content"
                        name="description"
                        type="text"
                        value={createForm.values.description}
                        onChange={(e) => createForm.getData(e)}
                        className={style.formInput}
                    />
                    <NativeInput
                        placeholder="Learnings (What you will learn)"
                        name="learnings"
                        type="text"
                        value={createForm.values.learnings}
                        onChange={(e) => createForm.getData(e)}
                        className={style.formInput}
                    />
                    <Select
                        placeholder="Type of Content"
                        variant='outlined'
                        onChange={(e) => {
                            createForm.getData(e);
                        }}
                        id="category"
                        name="category"
                        value={createForm.values.category}
                        children={selectContent}
                    />
                    <NativeInput
                        placeholder="Select file to upload"
                        id="fileUrl"
                        type="file"
                        onChange={(e) => createForm.getFile(e)}
                        className={style.formInput}
                    />
                    <ProgressBar bgcolor={"#FF8019"} completed={progressUpload} />
                    <NativeInput
                        placeholder="Name of creator"
                        name="ownerName"
                        type="text"
                        value={createForm.values.ownerName}
                        onChange={(e) => createForm.getData(e)}
                        className={style.formInput}
                    />
                    <NativeInput
                        placeholder="Email"
                        name="email"
                        type="email"
                        value={createForm.values.email}
                        onChange={(e) => createForm.getData(e)}
                        className={style.formInput}
                    />
                    <NativeInput
                        placeholder="Phone Number"
                        name="phoneNumber"
                        type="tel"
                        value={createForm.values.phoneNumber}
                        onChange={(e) => createForm.getData(e)}
                        className={style.formInput}
                    />

                    <Button
                        onClick={() => createForm.submit()}
                        color="primary"
                        variant="contained"
                        style={{textTransform: 'none'}}
                    >
                        Submit {isLoading && <Loading />}
                    </Button>
                </div>
            </div>
    )
}