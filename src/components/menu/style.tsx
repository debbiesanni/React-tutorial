import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  list: {
      width: 300,
    },
    fullList: {
      width: 'auto',
    },
  logoutList: {
    backgroundColor: 'rgba(221, 221, 221, 0.27)',
    width: 300,
  },
  cursor:{
    cursor: 'none',
  },
  fontFamily:{
    fontSize: '.95rem',
  },
  closeBtn: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: "100%",
  },
  profile: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  profileContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

  },
  profileTitle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '16px',
    color: '#555555',
    textTransform: 'uppercase',
    margin: '1rem 0 2rem 0'
  },
  linkStyle: {
    color: '#AE520F',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '16px',
  },
  logout: {
    fontfamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '19px',
    color: '#555555',
    margin: '.5rem 0 0 3rem',
    padding: 0,
    cursor: 'pointer'
  }
});
