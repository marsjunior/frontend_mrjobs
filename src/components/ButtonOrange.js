import { Button, withStyles } from '@material-ui/core';


const ButtonOrange = withStyles( theme => ({
    root: {
      color: "#fff",
      marginTop: 30,
      width: '100%',
      borderRadius: '2em',
      backgroundColor: "#F49400",
      "&:hover": {
        backgroundColor: "#cc7a00"
      }
    }
  
  }))(Button);

export default ButtonOrange;