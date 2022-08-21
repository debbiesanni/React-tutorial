import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import logos from 'assets/img/logos.png';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles((theme) => ({
    imgPreview: {
        width: "200px",
        height: "180px",
        border: "1px solid gray",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
    },
    fileInput: {
      fontSize: "3rem",
      position: "absolute",
      top: "-7rem",
      left: "5rem",
    },
    img: {
      maxWidth: "100%",
      maxHeight: "100%",
    },
}))

interface Props {
    handleChange: Function;
    name: string;
    uploadName?: string;
    defaultValue?: any;
}

export default function ImageUploader({uploadName, handleChange, defaultValue,}: Props) {
  const classes = useStyles();
    const [imageFile, setImageFile] = useState<Record<string, any>>({file: '', imagePreviewUrl: ''});

    const handleSubmit = (e) => {
        e.preventDefault();
      }

      const handleImageChange = (e) => {
        e.preventDefault();
    
        let reader = new FileReader();
        let file = e.target.files[0];
    
        reader.onloadend = () => {
          setImageFile({
            file: file,
            imagePreviewUrl: reader.result
          });
        }
        reader.readAsDataURL(file)
      }

      let {imagePreviewUrl} = imageFile;
      let $imagePreview = null;
      if (imagePreviewUrl) {
        $imagePreview = (<img src={imagePreviewUrl} alt="upload" className={classes.img} />);
      } else {
        $imagePreview = (<div className="previewText"></div>);
      }
      
    return (
        <div className="previewComponent">
          <label>{uploadName}</label>
          <div className={classes.imgPreview}>
            {$imagePreview}
          </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="filePicker" className="uploadPicture">
              <IconButton color="primary" aria-label="upload picture" component="span">
                <PhotoCamera fontSize="large" className={classes.fileInput} />
              </IconButton>
            </label>
            <input id="filePicker"  style={{visibility:"hidden"}}  
              type="file" 
              onChange={(e) => {handleChange(e); handleImageChange(e)}} defaultValue={defaultValue} />
          </form>
        </div>
    )
}


{/* <svg width="150" height="150" viewBox="0 0 24 24" fill="none" stroke="#56ceef" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3" />
                        <circle cx="12" cy="10" r="3" />
                        <circle cx="12" cy="12" r="10" />
                    </svg> */}