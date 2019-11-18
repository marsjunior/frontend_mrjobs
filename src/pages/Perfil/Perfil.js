import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import avatar from '../../assets/avatar.png';
import Avatar from '@material-ui/core/Avatar';
import InputGray from '../../components/InputGray';
import Menu from "../../components/Menu";
import InputNome from "../../components/InputNome";
import DateFnsUtils from '@date-io/date-fns';
import ButtonOrange from "../../components/ButtonOrange";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';


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
  data:{
    width: '100%',
  }
}));

export default function Perfil() {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date('2012-05-18T01:01:01'));

  const Salvar = async (e) => {
    e.preventDefault();
  };
  const handleDateChange = (date) =>{
    setSelectedDate(date);
  };
  return (
    <div className={classes.root}>
        <Menu titulo="Perfil" />
        <main className={classes.content}>
          <div className={classes.espaco} />
          <div className={classes.meio}>
            <Avatar alt="Remy Sharp" src={avatar} className={classes.bigAvatar}></Avatar>
            <InputNome
              defaultValue="Dom Pedro I"
              inputProps={{ 'aria-label': 'naked' }}
            />
            <div className={classes.espaco} />
            <div className={classes.formulario}>
              <form onSubmit={Salvar}>
                <InputGray id="custom-css-standard-input" label="Email" value="meuemail@gmail.com"/>
                <InputGray  id="custom-css-standard-input" type="tel" label="Telefone" value="(83) 99999-9999"/>
                <InputGray id="custom-css-standard-input" type="number"
                  label="CPF" />
                <InputGray id="custom-css-standard-input" 
                  label="Email" />
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="dd/MM/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Data de Nascimento"
                    className={classes.data}
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                </MuiPickersUtilsProvider>
                <InputGray  id="custom-css-standard-input" type="password"
                  label="Senha" />
                <InputGray  id="custom-css-standard-input" type="password"
                  label="Confirmar Senha" />
                <ButtonOrange type='submit'>Salvar</ButtonOrange>
              </form>
            </div>
          </div>
        </main>
    </div>
  );
}