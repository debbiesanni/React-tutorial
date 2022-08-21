import makeStyle from '@material-ui/core/styles/makeStyles';

export default function ProgressBar ({ bgcolor, completed }) {

    const containerStyles = {
        height: 17,
        width: '100%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        marginBottom: 10
      }
    
      const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right' as 'right',
        transition: 'width 1s ease-in-out',
      }
    
      const labelStyles = {
        padding: 2,
        color: 'white',
        fontWeight: 400
      }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
    );
  };