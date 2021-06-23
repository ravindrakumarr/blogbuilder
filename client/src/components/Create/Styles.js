import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
  },
  image: {
    marginLeft: '15px',
  },
  not_allow_before_login:{
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    width: '60%',
    minheight: '100px',
    backgroundColor: '#fff',
    marginLeft: '20%',
    marginTop: '50px',
    textAlign: 'center',
    padding: '20px 10px 25px 10px'
  }
}));
