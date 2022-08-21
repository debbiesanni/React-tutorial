import Button from '../components/button';
import Image from '../components/shared/image';
export default function Custom404() {

    const goBack = () => {
        window.history.back();
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                backgroundColor: 'white'
            }}
        >
            <Image
                src="/media/images/default/notFound.png"
                alt="Exam"
                className="image"
            />
            <p
                style={{
                    fontSize: '22px'
                }}
            >Page Not Found</p>

            <p
                style={{marginTop: '3rem'}}
            >Oops!!! It seems this page cannot be found</p>
            <Button
                variant="outlined"
                color="primary"
                onClick={() => goBack()}
                style={{textTransform: 'none', margin: '1rem 0'}}
            >
                Please Return to previous page
            </Button>
        </div>
    )
  }