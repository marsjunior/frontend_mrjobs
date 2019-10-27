import { Button, withStyles } from '@material-ui/core';


const ButtonTransparent = withStyles( theme => ({
    root: {
      color: "#F49400",
      borderRadius: '2em',
      borderColor: "#F49400",
      marginTop: 15,
      fontSize: 10,
    }
  
  }))(Button);

  export default ButtonTransparent;