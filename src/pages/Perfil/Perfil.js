import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import avatar from '../../assets/avatar.png';
import Avatar from '@material-ui/core/Avatar';
import InputGray from '../../components/InputGray';
import Menu from "../../components/Menu";
import InputNome from "../../components/InputNome";

const useStyles = makeStyles(theme => ({
  root:{
    display: 'flex',
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 100,
    height: 100,
  },
  espaco: {
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  meio:{
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  formulario:{
    width: '100%',
    maxWidth: '300px',
  },
}));

export default function Perfil() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Menu titulo="Perfil" searchCondicao="false"/>
        <main className={classes.content}>
          <div className={classes.espaco} />
          <div className={classes.meio}>
            <Avatar alt="Remy Sharp" src={avatar} className={classes.bigAvatar}></Avatar>
            <InputNome
              defaultValue="Marcos Junior"
              inputProps={{ 'aria-label': 'naked' }}
            />
            <div className={classes.espaco} />
            <div className={classes.formulario}>
              <form>
                <InputGray id="custom-css-standard-input" label="Email" value="meue_mail@gmail.com"/>
                <InputGray  id="custom-css-standard-input" type="tel" label="Telefone" value="(83) 99999-9999"/>
                <InputGray  id="custom-css-standard-input" type="text" label="Escolaridade" value="Ensino Médio"/>
              </form>
            </div>
          </div>
        </main>
    </div>
  );
}