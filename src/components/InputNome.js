import { InputBase , withStyles } from '@material-ui/core';

const InputNome = withStyles( theme => ({
    input: {
        textAlign: 'center'
      }  
  }))(InputBase);

  export default InputNome;