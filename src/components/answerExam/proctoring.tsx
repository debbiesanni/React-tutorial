import { postContent, updateServerData } from '../../utils';
import { useRef, useEffect, useState } from 'react';
import Webcam from 'react-webcam';

function App({ setMessage, id, centreId }) {
    const savedProctoring = useRef(null);
    const videoConstraints = {
        width: 250,
        height: 250,
        facingMode: 'user',
    };

    const webcamRef = useRef(null);
    useEffect(() => {
        const saveImage = async () => {
            try {
                const imageSrc = webcamRef.current.getScreenshot();
                const { data } = await postContent({
                    url: `/file-upload-base64`,
                    data: { file: imageSrc },
                });
                if (data.fileUrl && id) {
                    await updateServerData({
                        url: `/centre/${centreId}/protor-content/${id}`,
                        data: { content: data.fileUrl, tabSwitchCount: 5 },
                    });
                }
            } catch ({ message }) {
                setMessage(message);
            }
        };
        savedProctoring.current = setInterval(() => {
            saveImage();
        }, 300000);
    }, [id, webcamRef]);

    return (
        <>
            <Webcam
                audio={false}
                height={250}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={250}
                videoConstraints={videoConstraints}
            />
        </>
    );
}

export default App;
