
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
    width: '49%',
    backgroundColor: '#0099cc',
    textTransform: 'none'
  },
  buttonClear: {
    marginBottom: 10,
    width: '48%',
    marginLeft: '1%',
    textTransform: 'none'
  },
  textfield:{
    width: '48%',
    marginLeft: '0.5%',
  },
  textarea:{
    background: 'url(http://i.imgur.com/2cOaJ.png)',
    backgroundAttachment: 'local',
    backgroundRepeat: 'no-repeat',
    paddingLeft: '35px',
    paddingTop: '10px',
    borderColor:'#ccc',
    width: '98%',
    marginBottom: 10
  }
}));
