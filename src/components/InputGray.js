
import { TextField, withStyles } from '@material-ui/core';


const InputGray = withStyles( theme => ({
    root: {
      width: '100%',
      '& label.Mui-focused': {
        color: '#707c8d',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#707c8d',
      },
      paddingBottom: '15px',
    }
  
  }))(TextField);

  export default InputGray;